import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from 'src/app/classes/activity';
import { ActivitiesService } from 'src/app/services/activities.service';

@Component({
  selector: 'app-list-acitivite-admin',
  templateUrl: './list-acitivite-admin.component.html',
  styleUrls: ['./list-acitivite-admin.component.css']
})
export class ListAcitiviteAdminComponent implements OnInit {
  constructor(private service: ActivitiesService, private route: Router) { }
  activities: Activity[];
  activitiesAfficher: Activity[];

  ngOnInit(): void {
    this.activities = this.service.getActs();
    this.activitiesAfficher = this.activities;
  }

  supprimer(id) {
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



}
