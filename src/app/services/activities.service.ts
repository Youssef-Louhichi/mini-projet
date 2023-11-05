import { Injectable } from '@angular/core';
import { Activity } from '../classes/activity';
import { MembreResponsable } from '../classes/membre-responsable';
import { MembersService } from './members.service';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor(private resService:MembersService) { }

  lesresponables:MembreResponsable[]=this.resService.getMembers();

  lesactivitees:Activity[]=[
    new Activity(4,"Formation Montage","assets/activity.png",new Date(2023,12,10),"formation","jehfjke", this.lesresponables,10,true),
    new Activity(7,"Special Guest","assets/activity.png",new Date(2023,12,23),"event","jehfjke", this.lesresponables,15,true),
    new Activity(9,"Iset Cinema","assets/activity.png",new Date(2023,12,15),"event","jehfjke",this.lesresponables,0,true),
    new Activity(1,"Formation Realisation","assets/activity.png",new Date(2023,12,30),"formation","jehfjke", [],20,false),
    new Activity(14,"Formation plot-writing","assets/activity.png",new Date(2023,12,1),"formation","jehfjke", [],0,false)
  ]

  public getActs(){
    return this.lesactivitees;
  }

  i:number;
  indice:number;
  

  public supprimer(id: number){
    for(this.i=0;this.i<this.lesactivitees.length;this.i++){
      if (this.lesactivitees[this.i].id==id){
       this.indice=this.i;
       break;
      }
    }

      this.lesactivitees.splice(this.indice,1)

  }

  public ajouter(a:Activity){
    this.lesactivitees.push(a)
  }

  public modifierService(idInit:number,id:string,int:string,ph:string,date:string,cat:string,lieu:string,prix:string,lim:boolean){
    for(this.i=0;this.i<this.lesactivitees.length;this.i++){
    if (this.lesactivitees[this.i].id==idInit){
        this.indice=this.i;
     break;
    }

  
  }
    this.lesactivitees[this.i].id=Number(id);
    this.lesactivitees[this.i].int=int;
    this.lesactivitees[this.i].date_act=new Date(date);
    this.lesactivitees[this.i].photo=ph;
    this.lesactivitees[this.i].categorie=cat;
    this.lesactivitees[this.i].lieu=lieu;
    this.lesactivitees[this.i].prix=Number(prix);
    this.lesactivitees[this.i].limite=lim;
    if(lim){this.lesactivitees[this.i].responsables=this.lesresponables}
    else{this.lesactivitees[this.i].responsables=[];}

  }

}
