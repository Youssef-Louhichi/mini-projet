import { Injectable } from '@angular/core';
import { Activity } from '../classes/activity';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL = "http://localhost:3000/activitees";

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService  {

  constructor(private http: HttpClient) { }

  



  public getActs():Observable<Activity[]>{
    return this.http.get<Activity[]>(URL);
  }

  

  public supprimerAct(id: number){
    
    return this.http.delete(URL+"/"+ id);

  }
  

  public ajouter(a:Activity):Observable<Activity>{
    return this.http.post<Activity>(URL, a);  
  }

  public modifierService(id:number,a:Activity){
    return this.http.put<Activity>(URL+"/"+ id, a);
  }

}
