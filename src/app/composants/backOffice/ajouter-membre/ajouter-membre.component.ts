import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from 'src/app/classes/activity';
import { MembreResponsable } from 'src/app/classes/membre-responsable';
import { ActivitiesService } from 'src/app/services/activities.service';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-ajouter-membre',
  templateUrl: './ajouter-membre.component.html',
  styleUrls: ['./ajouter-membre.component.css']
})
export class AjouterMembreComponent implements OnInit {



  constructor( private route: Router, private resService: MembersService,
    private actservice:ActivitiesService) { }

  lesresponsables: MembreResponsable[];
  newResponsable: MembreResponsable;
  lesactivitees:Activity[];

  ngOnInit(): void {
    this.resService.getMembers().subscribe(data => this.lesresponsables=data)
    this.actservice.getActs().subscribe(data => this.lesactivitees=data)

  }

  onAjoute(nom: string, prenom: string, tel: string) {
    if (tel.length==8 && !isNaN(Number(tel))) {

      
      this.newResponsable = new MembreResponsable(nom,prenom,tel)
      this.resService.ajouter(this.newResponsable).subscribe()
      this.lesactivitees.forEach(e=>{
        if(e.limite){
        let tab=e.responsables
        tab.unshift(this.newResponsable)
        e.responsables=tab     
        this.actservice.modifierService(e.id,e).subscribe()}

      })
      this.route.navigate(['/admin/acts'])
    }
    else {
      alert("Numero telefone incorrecte")
    }
  }



  test(nom: string, prenom: string, tel: string) {
    if (nom == "" || prenom == "" || tel == "") {
      document.getElementById("butt").setAttribute("disabled", "true")
    }
    else {
      document.getElementById("butt").removeAttribute("disabled")
    }
  }

}
