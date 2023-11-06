import { Injectable } from '@angular/core';
import { Suggestion } from '../classes/suggestion';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL = "http://localhost:3000/suggestions";

@Injectable({
  providedIn: 'root'
})
export class SuggestionsService {

  constructor(private http:HttpClient) { }

 

  public getSug():Observable<Suggestion[]>{
      return this.http.get<Suggestion[]>(URL)
  }

  
  

  public supprimer(id: number){
    
    return this.http.delete(URL+"/"+ id);

  }

  

}
