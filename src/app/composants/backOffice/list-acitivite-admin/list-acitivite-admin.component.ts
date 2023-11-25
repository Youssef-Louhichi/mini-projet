import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from 'src/app/classes/activity';
import { ActivitiesService } from 'src/app/services/activities.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-list-acitivite-admin',
  templateUrl: './list-acitivite-admin.component.html',
  styleUrls: ['./list-acitivite-admin.component.css']
})
export class ListAcitiviteAdminComponent implements OnInit {
  constructor(private activityservice: ActivitiesService, private route: Router, private adService: AdminService) { }
  activities: Activity[];
  activitiesAfficher: Activity[];
  user: string;

  ngOnInit(): void {
    this.activityservice.getActs().subscribe( data => {this.activities = data
      this.activitiesAfficher=this.activities}

      );
      this.adService.getAdmin().subscribe(data => this.user=data.username)



  }

  

  supprimer(id:number,i:number) {

    if(confirm(`Est-ce que vous étes sur que vous voulez supprimer l'activité de l'id ${id}`)){
    this.activityservice.supprimerAct(id).subscribe();

    this.activitiesAfficher.splice(i,1)

    for(i=0;i<this.activities.length;i++){
      if(this.activities[i].id==id)
        break;
    }
    this.activities.splice(i,1)
  }
  }

  
  find(id: string) {
    if (id != ""){
      this.activitiesAfficher = this.activities.filter(e => e.id == Number(id))
    }
    else
      this.activitiesAfficher = this.activities;

  }



  filtre(cat: string) {
    if (cat != ""){
      this.activitiesAfficher = this.activities.filter(e => e.categorie == cat)
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
