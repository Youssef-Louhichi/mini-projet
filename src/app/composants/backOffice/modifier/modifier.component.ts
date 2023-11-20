import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from 'src/app/classes/activity';
import { MembreResponsable } from 'src/app/classes/membre-responsable';
import { ActivitiesService } from 'src/app/services/activities.service';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css'],
  providers: [DatePipe]
})
export class ModifierComponent implements OnInit {
  constructor(private service: ActivitiesService, private membreservice: MembersService, private activatedRoute: ActivatedRoute,
    private route: Router,private formBuilder:FormBuilder,private datePipe: DatePipe) { }
  lesactivities: Activity[] = [];


  act: Activity;
  idInit: number;
  lesresponsables: MembreResponsable[];
  modifierForm:FormGroup

  ngOnInit(): void {

    this.modifierForm= this.formBuilder.group(
      {
        id: [],
        int :[],
        photo:[''],
        date:[],
        lieu:[],
        prix:[],
        categorie:[],
        limite:[],
  
      }
    );
    
      

    this.service.getActs().subscribe(data => {
      this.lesactivities = data
      this.idInit = this.activatedRoute.snapshot.params['id']
      this.act = this.lesactivities.find(e => e.id == this.idInit)

      this.modifierForm.get('id').setValue(this.act.id);
      this.modifierForm.get('int').setValue(this.act.int);
      this.modifierForm.get('date').setValue(this.datePipe.transform(this.act.date_act,'yyyy-MM-dd'));
      this.modifierForm.get('lieu').setValue(this.act.lieu);
      this.modifierForm.get('prix').setValue(this.act.prix);
      this.modifierForm.get('categorie').setValue(this.act.categorie);
      this.modifierForm.get('limite').setValue(this.act.limite);



    }
    );

    this.membreservice.getMembers().subscribe(data => this.lesresponsables = data)

    

  }

  test() {

    let id =this.modifierForm.get('id').value;
    let int =this.modifierForm.get('int').value;
    let lieu =this.modifierForm.get('lieu').value;
    let date =this.modifierForm.get('date').value;

    if (id == "" || int == "" || date == "" || lieu == "") {
      document.getElementById("butt").setAttribute("disabled", "true")
    }
    else {
      document.getElementById("butt").removeAttribute("disabled")
    }
  }



  modifier() {
    let id =this.modifierForm.get('id').value;
    let int =this.modifierForm.get('int').value;
    let ph =this.modifierForm.get('photo').value;
    let date =this.modifierForm.get('date').value;
    let prix =this.modifierForm.get('prix').value;
    let cat =this.modifierForm.get('categorie').value;
    let lieu =this.modifierForm.get('lieu').value;
    let lim =this.modifierForm.get('limite').value;

    if (this.lesactivities.find(e => e.id == Number(id)) == this.act ||
      !this.lesactivities.find(e => e.id == Number(id))) {

      if (ph =="") {
        ph = "assets/activity.png"
      }
      else {
        ph = "assets\\" + ph.split("\\")[2];
      }

      this.act.id = Number(id);
      this.act.int = int;
      this.act.date_act = new Date(date);
      this.act.photo = ph;
      this.act.categorie = cat;
      this.act.lieu = lieu;
      this.act.prix = Number(prix);
      this.act.limite = lim;

      if (lim) { this.act.responsables = this.lesresponsables }
      else { this.act.responsables = []; }

      this.service.modifierService(Number(id), this.act).subscribe()
      this.route.navigate(['/admin/acts'])
    }
    else {
      alert("Id existe déjà pour une autre activitée.")
    }

  }

  onReset(){
    this.modifierForm.reset({
      id: this.act.id,
      int :this.act.int,
      photo:'',
      date:this.datePipe.transform(this.act.date_act,'yyyy-MM-dd'),
      lieu:this.act.lieu,
      prix:this.act.prix,
      categorie:this.act.categorie,
      limite:this.act.limite
    });
  }

  

  Annuler() {
    this.route.navigate(['/admin/acts'])
  }
}
