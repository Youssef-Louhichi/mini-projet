import { Injectable } from '@angular/core';
import { Admin } from '../classes/admin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  state:string="";

  public login(username:string,pwd:string,admin:Admin){
   
      if(username==admin.username && pwd==admin.pwd){
        localStorage.setItem('state','connected')
        return true;
      }
      else{
        localStorage.setItem('state','disconnected')
        return false;
      }
      
   
  }


  public logout(){
    localStorage.removeItem('state')
  }
}
