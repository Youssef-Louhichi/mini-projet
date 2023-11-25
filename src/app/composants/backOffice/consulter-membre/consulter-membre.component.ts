import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from 'src/app/classes/activity';
import { MembreResponsable } from 'src/app/classes/membre-responsable';
import { ActivitiesService } from 'src/app/services/activities.service';
import { AdminService } from 'src/app/services/admin.service';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-consulter-membre',
  templateUrl: './consulter-membre.component.html',
  styleUrls: ['./consulter-membre.component.css']
})
export class ConsulterMembreComponent implements OnInit{

  constructor( private route: Router, private adService: AdminService,private serviceMembre:MembersService, private actservice:ActivitiesService) { }
  lesresponsables: MembreResponsable[];
  lesactivitees:Activity[];
  user: string;


  ngOnInit(): void {
    this.serviceMembre.getMembers().subscribe(data => this.lesresponsables=data);
    this.actservice.getActs().subscribe(data => this.lesactivitees=data)

    this.adService.getAdmin().subscribe(data => this.user=data.username)


  }



  goAjouter() {
    this.route.navigate(['/admin/ajouterRes'])
  }

  supprimer(id:number,i:number) {
    if(confirm(`Est-ce que vous étes sur que vous voulez supprimer ce membre?`)){

    this.serviceMembre.supprimerRes(id).subscribe();

    this.lesresponsables.splice(i,1)

    this.lesactivitees.forEach(e=>{
      if(e.limite){
      e.responsables=this.lesresponsables     
      this.actservice.modifierService(e.id,e).subscribe()}

    })
  }

  }



}
