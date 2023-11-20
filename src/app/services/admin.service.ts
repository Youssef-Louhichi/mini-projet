import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../classes/admin';
import { Observable } from 'rxjs';

const URL = "http://localhost:3000/admin";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }


  public getAdmin():Observable<Admin>{
   return this.http.get<Admin>(URL)
  }

  public setAdmin(a:Admin){
    return this.http.put<Admin>(URL, a);
  }

}
