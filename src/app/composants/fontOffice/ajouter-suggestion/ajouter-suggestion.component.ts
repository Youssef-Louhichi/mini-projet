import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  nom: new FormControl("",Validators.required),
  mail: new FormControl("",Validators.required),
  sugg : new FormControl("",Validators.required),
  date:new FormControl("")
})

ngOnInit(): void {
  
}


public get nom()
{
  return this.sugges.get("nom");
}


public get mail()
{
  return this.sugges.get("mail");
}
public get sugg()
{
  return this.sugges.get("sugg");
}

constructor(private ser:SuggestionsService){}

send()
{

  let nom =this.sugges.get('nom').value;
  let mail =this.sugges.get('mail').value;
  let sugg =this.sugges.get('sugg').value;
  let date = new Date;

  this.newsugg = new Suggestion(nom,mail,sugg,date);

this.ser.ajouter(this.newsugg).subscribe();

alert("votre suggestion a été envoyé avec succes !");
this.sugges.reset();
}


onResetForm(){
  this.sugges.reset();

}


isValidP2()
  {
    return this.nom?.errors?.['required'] && this.nom?.touched;
  }


  isValidP()
  {
    return this.mail?.errors?.['required'] && this.mail?.touched;
  }


  
  isValidP3()
  {
    return this.sugg?.errors?.['required'] && this.sugg?.touched;
  }
}
