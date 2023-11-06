import { Component ,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from 'src/app/classes/activity';
import { ActivitiesService } from 'src/app/services/activities.service';

@Component({
  selector: 'app-liste-activite',
  templateUrl: './liste-activite.component.html',
  styleUrls: ['./liste-activite.component.css']
})
export class ListeActiviteComponent implements OnInit{

  constructor(private service: ActivitiesService, private route: Router) { }
  activities: Activity[];
  activitiesAfficher: Activity[];

  ngOnInit(): void {
    this.service.getActs().subscribe( data => {this.activities=data
    this.activitiesAfficher = this.activities;}
    );
  }


  filtre1(cat: string) {
    if (cat != "")
      this.activitiesAfficher = this.activities.filter(e => e.categorie == cat)
    else
      this.activitiesAfficher = this.activities;

  }

}
