import { Component, OnInit } from '@angular/core';
import { Suggestion } from 'src/app/classes/suggestion';
import { AuthService } from 'src/app/services/auth.service';
import { SuggestionsService } from 'src/app/services/suggestions.service';

@Component({
  selector: 'app-boite',
  templateUrl: './boite.component.html',
  styleUrls: ['./boite.component.css']
})
export class BoiteComponent implements OnInit{

  constructor(private sugService:SuggestionsService,private serviceAuth:AuthService){}
  lessuggestions:Suggestion[];
  user:string;

  ngOnInit(): void {
    this.lessuggestions=this.sugService.getSug().sort((a,b)=> (a.date_post > b.date_post ? 1 : -1))
    this.user = this.serviceAuth.getUser();
  }

  supprimer(id:number){
    this.sugService.supprimer(id)
  }

}
