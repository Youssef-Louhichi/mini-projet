import { Component, OnInit } from '@angular/core';
import { Suggestion } from 'src/app/classes/suggestion';
import { AdminService } from 'src/app/services/admin.service';
import { SuggestionsService } from 'src/app/services/suggestions.service';

@Component({
  selector: 'app-boite',
  templateUrl: './boite.component.html',
  styleUrls: ['./boite.component.css']
})
export class BoiteComponent implements OnInit{

  constructor(private sugService:SuggestionsService,private adService:AdminService){}
  lessuggestions:Suggestion[];
  user:string;

  ngOnInit(): void {
    this.sugService.getSug().subscribe(data => {this.lessuggestions=data
    this.lessuggestions.sort((a,b)=> (a.date_post < b.date_post ? 1 : -1))})
    this.adService.getAdmin().subscribe(data => this.user=data.username)
  }

  supprimer(id:number,i:number){
    if(confirm(`Est-ce que vous étes sur que vous voulez supprimer cette suggestion`)){

    this.sugService.supprimer(id).subscribe()
    this.lessuggestions.splice(i,1)
    }
  }

}
