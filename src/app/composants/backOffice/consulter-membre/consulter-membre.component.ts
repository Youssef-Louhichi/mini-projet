import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from 'src/app/classes/activity';
import { MembreResponsable } from 'src/app/classes/membre-responsable';
import { ActivitiesService } from 'src/app/services/activities.service';
import { AuthService } from 'src/app/services/auth.service';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-consulter-membre',
  templateUrl: './consulter-membre.component.html',
  styleUrls: ['./consulter-membre.component.css']
})
export class ConsulterMembreComponent implements OnInit{

  constructor( private route: Router, private serviceAuth: AuthService,private serviceMembre:MembersService, private actservice:ActivitiesService) { }
  lesresponsables: MembreResponsable[];
  lesactivitees:Activity[];
  user: string;


  ngOnInit(): void {
    this.serviceMembre.getMembers().subscribe(data => this.lesresponsables=data);
    this.actservice.getActs().subscribe(data => this.lesactivitees=data)

    this.user = this.serviceAuth.getUser();


  }



  goAjouter() {
    this.route.navigate(['/admin/ajouterRes'])
  }

  supprimer(id:number,i:number) {
    this.serviceMembre.supprimerRes(id).subscribe();

    this.lesresponsables.splice(i,1)

    this.lesactivitees.forEach(e=>{
      if(e.limite){
      e.responsables=this.lesresponsables     
      this.actservice.modifierService(e.id,e).subscribe()}

    })

  }



}
