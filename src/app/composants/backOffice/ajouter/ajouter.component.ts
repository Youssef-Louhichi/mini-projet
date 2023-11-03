import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { Activity } from 'src/app/classes/activity';
import { ActivitiesService } from 'src/app/services/activities.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent {


  constructor(private act:ActivitiesService,private route:Router){}

  lesactivites:Activity[];
  newAct:Activity;
  onAjoute(id:string,int:string,ph:string,date:string,cat:string,lieu:string){
    this.lesactivites=this.act.getActs();
    this.newAct=new Activity(Number(id),int,ph,date,cat,lieu)
    this.lesactivites.push(this.newAct)
    this.route.navigate(['/admin/acts'])
  }
}
