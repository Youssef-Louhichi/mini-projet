import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  state:string="";
  pwdAdmin:string="youssef"
  userAdmin:string="youssef"
  public login(username:string,pwd:string){
    if(username==this.userAdmin && pwd==this.pwdAdmin){
      localStorage.setItem('state','connected')
      return true;
    }
    else{
      localStorage.setItem('state','disconnected')
      return false;
    }
  }

  public getUser(){
    return this.userAdmin;
  }

  public logout(){
    localStorage.removeItem('state')
  }

  public changer(pwdAncien:string,pwdNouveau:string){
      if(pwdAncien==this.pwdAdmin){
        this.pwdAdmin=pwdNouveau;
        return true;
      }
      else
        return false;

  }
}
