import { Injectable } from '@angular/core';
import { Activity } from '../classes/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor() { }

  lesactivitees:Activity[]=[
    new Activity(4,"fdhqj","qjfel",new Date(2023,12,10),"formation","jehfjke"),
    new Activity(7,"fdhqj","qjfel",new Date(2023,12,10),"event","jehfjke"),
    new Activity(9,"fdhqj","qjfel",new Date(2023,12,10),"event","jehfjke"),
    new Activity(1,"fdhqj","qjfel",new Date(2023,12,10),"formation","jehfjke"),
    new Activity(14,"fdhqj","qjfel",new Date(2023,12,10),"formation","jehfjke")
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

  public modifierService(idInit:number,id:string,int:string,ph:string,date:string,cat:string,lieu:string){
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
  }

}
