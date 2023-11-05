import { Component } from '@angular/core';
import {  Router } from '@angular/router';
import { Activity } from 'src/app/classes/activity';
import { MembreResponsable } from 'src/app/classes/membre-responsable';
import { ActivitiesService } from 'src/app/services/activities.service';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent {


  constructor(private actService:ActivitiesService,private route:Router,private resService:MembersService){}

  lesresponsables:MembreResponsable[]=[];
  newAct:Activity;

  
  onAjoute(id:string,int:string,ph:string,date:string,cat:string,lieu:string,prix:string,lim:boolean){
  

    if(ph==""){
      ph="assets/activity.png"
    }
    else{
      ph="assets\\"+ph.split("\\")[2];
    }

    if(lim){
      this.lesresponsables=this.resService.getMembers();
    }
   
    this.newAct=new Activity(Number(id),int,ph,new Date(date),cat,lieu,this.lesresponsables,Number(prix),lim)
    this.actService.ajouter(this.newAct)
    this.route.navigate(['/admin/acts'])
  }

  test(id:string,int:string,date:string,lieu:string){
    if(id=="" || int=="" || date=="" || lieu==""){
      document.getElementById("butt").setAttribute("disabled","true")
    }
    else{      
      document.getElementById("butt").removeAttribute("disabled")
  }
}

}
