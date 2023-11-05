import { Injectable } from '@angular/core';
import { Suggestion } from '../classes/suggestion';

@Injectable({
  providedIn: 'root'
})
export class SuggestionsService {

  constructor() { }

  lesSuggestions:Suggestion[]=[
    new Suggestion("3ammar","3ammar0@gmail.com","Loving your club and site!",new Date(2023,11,5)),
    new Suggestion("3ammar","3ammar0@gmail.com",
    "J'espere que vous organisez Watch party pour les film de marvel et dc",new Date(2023,11,2)),
    new Suggestion("3ammar","3ammar0@gmail.com",
    "J'espere que vous organisez Watch party pour les film de disney",new Date(2023,10,25))
  ]

  public getSug(){
    return this.lesSuggestions;
  }

  i:number;
  indice:number;
  

  public supprimer(id: number){
    for(this.i=0;this.i<this.lesSuggestions.length;this.i++){
      if (this.lesSuggestions[this.i].id==id){
       this.indice=this.i;
       break;
      }
    }

      this.lesSuggestions.splice(this.indice,1)

  }

  

}
