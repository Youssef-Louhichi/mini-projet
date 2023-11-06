import { Injectable } from '@angular/core';
import { MembreResponsable } from '../classes/membre-responsable';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL = "http://localhost:3000/membres";

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private http:HttpClient) { }

  public getMembers():Observable<MembreResponsable[]>{
    return this.http.get<MembreResponsable[]>(URL);
  }

  public ajouter(a:MembreResponsable):Observable<MembreResponsable>{
    return this.http.post<MembreResponsable>(URL,a);  
  }

}
