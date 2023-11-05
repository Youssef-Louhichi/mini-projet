import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MembreResponsable } from 'src/app/classes/membre-responsable';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-ajouter-membre',
  templateUrl: './ajouter-membre.component.html',
  styleUrls: ['./ajouter-membre.component.css']
})
export class AjouterMembreComponent implements OnInit {



  constructor( private route: Router, private resService: MembersService) { }

  lesresponsables: MembreResponsable[];
  newResponsable: MembreResponsable;

  ngOnInit(): void {
    this.lesresponsables=this.resService.getMembers()
  }

  onAjoute(nom: string, prenom: string, tel: string) {
    if (tel.length==8 && !isNaN(Number(tel))) {

      
      this.newResponsable = new MembreResponsable(nom,prenom,tel)
      this.resService.ajouter(this.newResponsable)
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
