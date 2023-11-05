import { Injectable } from '@angular/core';
import { MembreResponsable } from '../classes/membre-responsable';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor() { }

  members:MembreResponsable[]=
  [
    new MembreResponsable("Youssef","ben Farah","12345678"),
    new MembreResponsable("Youssef","Louhichi","21287173"),
    new MembreResponsable("Aziz","ben Mimoun","12345678")
  ]

  public getMembers(){
    return this.members;
  }

}
