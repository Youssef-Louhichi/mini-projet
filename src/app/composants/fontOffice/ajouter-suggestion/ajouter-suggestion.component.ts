import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Suggestion } from 'src/app/classes/suggestion';
import { SuggestionsService } from 'src/app/services/suggestions.service';

@Component({
  selector: 'app-ajouter-suggestion',
  templateUrl: './ajouter-suggestion.component.html',
  styleUrls: ['./ajouter-suggestion.component.css']
})
export class AjouterSuggestionComponent implements OnInit{

  lessuggestions: Suggestion[];
  newsugg: Suggestion;

sugges:FormGroup = new FormGroup ({

  nom: new FormControl(""),
  mail: new FormControl(""),
  sugg : new FormControl(""),
  date:new FormControl("")
})

ngOnInit(): void {
  
}

constructor(private ser:SuggestionsService){}

send()
{

  let nom =this.sugges.get('nom').value;
  let mail =this.sugges.get('mail').value;
  let sugg =this.sugges.get('sugg').value;
  let date = new Date;

  this.newsugg = new Suggestion(nom,mail,sugg,date);

this.ser.ajouter(this.newsugg).subscribe()
}
}
