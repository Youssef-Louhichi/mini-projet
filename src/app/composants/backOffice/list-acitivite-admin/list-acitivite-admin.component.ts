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
  }

  find(id: string) {
    if (id != "")
      this.activitiesAfficher = this.activities.filter(e => e.id == Number(id))
    else
      this.activitiesAfficher = this.activities;

  }

  filtre1(cat: string) {
    if (cat != "")
      this.activitiesAfficher = this.activities.filter(e => e.categorie == cat)
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
