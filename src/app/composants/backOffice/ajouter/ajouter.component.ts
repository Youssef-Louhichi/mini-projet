import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Activity } from 'src/app/classes/activity';
import { MembreResponsable } from 'src/app/classes/membre-responsable';
import { ActivitiesService } from 'src/app/services/activities.service';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit{


  constructor(private actService: ActivitiesService, private route: Router, private resService: MembersService,
    private formBuilder:FormBuilder) { }

  lesresponsables: MembreResponsable[];
  tab: MembreResponsable[] = [];
  lesactivitees: Activity[];

  ajoutGroupAct:FormGroup

  ngOnInit(): void {
    this.actService.getActs().subscribe( data => this.lesactivitees = data);
    this.resService.getMembers().subscribe(data => this.lesresponsables=data);
   this.ajoutGroupAct = this.formBuilder.group(
      {
        id: [],
        int :[''],
        photo:[''],
        date:[''],
        lieu:[''],
        prix:[],
        categorie:['formation'],
        limite:[]
  
      }
    )
   
  }


  onAjoute() {
    let id =this.ajoutGroupAct.get('id').value;
    let int =this.ajoutGroupAct.get('int').value;
    let ph =this.ajoutGroupAct.get('photo').value;
    let date =this.ajoutGroupAct.get('date').value;
    let prix =this.ajoutGroupAct.get('prix').value;
    let cat =this.ajoutGroupAct.get('categorie').value;
    let lieu =this.ajoutGroupAct.get('lieu').value;
    let lim =this.ajoutGroupAct.get('limite').value;

    

    if (!this.lesactivitees.find(e => e.id == Number(id))) {

      if (ph == "") {
        ph = "assets/activity.png"
      }
      else {
        ph = "assets\\" + ph.split("\\")[2];
      }

      if (lim) {
        this.tab = this.lesresponsables;
      }

      let newAct = new Activity(Number(id), int, ph, new Date(date), cat, lieu, this.tab, Number(prix), lim)
      this.actService.ajouter(newAct).subscribe(data => this.lesactivitees.unshift(data) )     
        this.route.navigate(['/admin/acts'])
    }
    else {
      alert("Id existe déjà pour une autre activitée.")
    }
  }


  onReset(){
    this.ajoutGroupAct.reset();
  }


  test() {
    let id =this.ajoutGroupAct.get('id').value;
    let int =this.ajoutGroupAct.get('int').value;
    let lieu =this.ajoutGroupAct.get('lieu').value;
    let date =this.ajoutGroupAct.get('date').value;


    if (id == "" || int == "" || date == "" || lieu == "") {
      document.getElementById("butt").setAttribute("disabled", "true")
    }
    else {
      document.getElementById("butt").removeAttribute("disabled")
    }
  }

}
