import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from 'src/app/classes/activity';
import { ActivitiesService } from 'src/app/services/activities.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-list-acitivite-admin',
  templateUrl: './list-acitivite-admin.component.html',
  styleUrls: ['./list-acitivite-admin.component.css']
})
export class ListAcitiviteAdminComponent implements OnInit {
  constructor(private service: ActivitiesService, private route: Router, private serviceAuth: AuthService) { }
  activities: Activity[];
  activitiesAfficher: Activity[];
  user: string


  ngOnInit(): void {
    this.activities = this.service.getActs();
    this.activitiesAfficher = this.activities;
    this.user = this.serviceAuth.getUser();

  }

  supprimer(id:number) {
    this.service.supprimer(id);
    if (this.f==0)
      this.find(this.id)
    if (this.f==1)
      this.filtre("formation")
    if (this.f==2)
      this.filtre("sortie")
    if (this.f==3)
      this.filtre("event")
  }

  f:number;
  id:string;
  find(id: string) {
    if (id != ""){
      this.activitiesAfficher = this.activities.filter(e => e.id == Number(id))
      this.id=id;
      this.f=0;
    }
    else
      this.activitiesAfficher = this.activities;

  }



  filtre(cat: string) {
    if (cat != ""){
      this.activitiesAfficher = this.activities.filter(e => e.categorie == cat)
      if(cat == "formation")
        this.f=1;
      if(cat== "sortie")
        this.f=2
      if(cat=="event")
        this.f=3
    }
    else
      this.activitiesAfficher = this.activities;

  }

  goAjouter() {
    this.route.navigate(['/admin/ajouter'])
  }

  trier(i: number) {
    if (i == 1) {
      this.activitiesAfficher.sort((a, b) => (a.id > b.id ? 1 : -1))
    }

    if (i == 2) {
      this.activitiesAfficher.sort((a, b) => (a.int > b.int ? 1 : -1))
    }

    if (i == 3) {
      this.activitiesAfficher.sort((a, b) => (a.date_act > b.date_act ? 1 : -1))
    }
  }



}
