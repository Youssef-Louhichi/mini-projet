import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from 'src/app/classes/activity';
import { MembreResponsable } from 'src/app/classes/membre-responsable';
import { ActivitiesService } from 'src/app/services/activities.service';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit {
  constructor(private service: ActivitiesService, private membreservice: MembersService, private activatedRoute: ActivatedRoute,
    private route: Router) { }
  lesactivities: Activity[] = [];


  act: Activity;
  idInit: number;
  lesresponsables: MembreResponsable[];
  modifierForm:FormGroup;

  ngOnInit(): void {
    
      

    this.service.getActs().subscribe(data => {
      this.lesactivities = data
      this.idInit = this.activatedRoute.snapshot.params['id']
      this.act = this.lesactivities.find(e => e.id == this.idInit)


    }
    );

    this.membreservice.getMembers().subscribe(data => this.lesresponsables = data)

    

  }

  test(id: string, int: string, date: string, lieu: string) {
    if (id == "" || int == "" || date == "" || lieu == "") {
      document.getElementById("butt").setAttribute("disabled", "true")
    }
    else {
      document.getElementById("butt").removeAttribute("disabled")
    }
  }



  modifier(id: string, int: string, ph: string, date: string, cat: string, lieu: string, prix: string, ch: boolean) {

    if (this.lesactivities.find(e => e.id == Number(id)) == this.act ||
      !this.lesactivities.find(e => e.id == Number(id))) {

      if (ph == "") {
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
      this.act.limite = ch;

      if (ch) { this.act.responsables = this.lesresponsables }
      else { this.act.responsables = []; }

      this.service.modifierService(Number(id), this.act).subscribe()
      this.route.navigate(['/admin/acts'])
    }
    else {
      alert("Id existe déjà pour une autre activitée.")
    }

  }

  

  Annuler() {
    this.route.navigate(['/admin/acts'])
  }
}
