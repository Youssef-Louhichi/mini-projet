import { Injectable } from '@angular/core';
import { Activity } from '../classes/activity';
import { MembreResponsable } from '../classes/membre-responsable';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {

  constructor() { }

  lesactivitees:Activity[]=[
    new Activity(4,"fdhqj","qjfel",new Date(2023,12,10),"formation","jehfjke", [
      new MembreResponsable("Youssef","ben Farah","12345678"),
      new MembreResponsable("Youssef","Louhichi","21287173"),
      new MembreResponsable("Aziz","ben Mimoun","12345678")
    ],10,true),
    new Activity(7,"fdhqj","qjfel",new Date(2023,12,23),"event","jehfjke", [
      new MembreResponsable("Youssef","ben Farah","12345678"),
      new MembreResponsable("Youssef","Louhichi","21287173"),
      new MembreResponsable("Aziz","ben Mimoun","12345678")
    ],15,true),
    new Activity(9,"fdhqj","qjfel",new Date(2023,12,15),"event","jehfjke", [
      new MembreResponsable("Youssef","ben Farah","12345678"),
      new MembreResponsable("Youssef","Louhichi","21287173"),
      new MembreResponsable("Aziz","ben Mimoun","12345678")
    ],0,true),
    new Activity(1,"fdhqj","qjfel",new Date(2023,12,30),"formation","jehfjke", [
      new MembreResponsable("Youssef","ben Farah","12345678"),
      new MembreResponsable("Youssef","Louhichi","21287173"),
      new MembreResponsable("Aziz","ben Mimoun","12345678")
    ],20,false),
    new Activity(14,"fdhqj","qjfel",new Date(2023,12,1),"formation","jehfjke", [
      new MembreResponsable("Youssef","ben Farah","12345678"),
      new MembreResponsable("Youssef","Louhichi","21287173"),
      new MembreResponsable("Aziz","ben Mimoun","12345678")
    ],0,false)
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

  }

}
