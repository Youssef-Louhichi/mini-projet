import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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



  constructor( private route: Router, private resService: MembersService,private formBuilder:FormBuilder,
    private actservice:ActivitiesService) { }

  lesresponsables: MembreResponsable[];
  newResponsable: MembreResponsable;
  lesactivitees:Activity[];

  ajoutGroupMem:FormGroup 

  ngOnInit(): void {
    this.resService.getMembers().subscribe(data => this.lesresponsables=data)
    this.actservice.getActs().subscribe(data => this.lesactivitees=data)
    this.ajoutGroupMem= this.formBuilder.group(
      {
        nom: ['',Validators.required],
        prenom :['',Validators.required],
        tel:['',Validators.required]
  
      }
    )

  }

  onAjoute() {
    let nom =this.ajoutGroupMem.get('nom').value;
    let prenom =this.ajoutGroupMem.get('prenom').value;
    let tel =this.ajoutGroupMem.get('tel').value

    if (tel.length==8 && !isNaN(Number(tel))) {



      
      this.newResponsable = new MembreResponsable(prenom,nom,tel)
      this.resService.ajouter(this.newResponsable).subscribe()
      this.lesactivitees.forEach(e=>{
        if(e.limite){
        let tab=e.responsables
        tab.unshift(this.newResponsable)
        e.responsables=tab     
        this.actservice.modifierService(e.id,e).subscribe()}

      })
      this.route.navigate(['/admin/consRes'])
    }
    else {
      alert("Numero telefone incorrecte")
    }
  }



  test() {
    let nom =this.ajoutGroupMem.get('nom').value;
    let prenom =this.ajoutGroupMem.get('prenom').value;
    let tel =this.ajoutGroupMem.get('tel').value
    if (nom == "" || prenom == "" || tel == "") {
      document.getElementById("butt").setAttribute("disabled", "true")
    }
    else {
      document.getElementById("butt").removeAttribute("disabled")
    }
  }

  public get nom()
  {
    return this.ajoutGroupMem.get("nom");
  }
  
  
  public get prenom()
  {
    return this.ajoutGroupMem.get("prenom");
  }
  public get tel()
  {
    return this.ajoutGroupMem.get("tel");
  }
  

  isValidP2()
  {
    return this.nom?.errors?.['required'] && this.nom?.touched;
  }


  isValidP()
  {
    return this.prenom?.errors?.['required'] && this.prenom?.touched;
  }


  
  isValidP3()
  {
    return this.tel?.errors?.['required'] && this.tel?.touched;
  }
}
