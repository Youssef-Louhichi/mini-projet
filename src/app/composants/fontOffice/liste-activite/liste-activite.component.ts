import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Activity } from 'src/app/classes/activity';
import { ActivitiesService } from 'src/app/services/activities.service';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-liste-activite',
  templateUrl: './liste-activite.component.html',
  styleUrls: ['./liste-activite.component.css']
})
export class ListeActiviteComponent implements OnInit {
  constructor(private activityservice: ActivitiesService, private adService: AdminService) { }
  activities: Activity[];
  activitiesAfficher: Activity[];
  user: string
  Filtre:FormGroup


  ngOnInit(): void {
    this.activityservice.getActs().subscribe( data => {this.activities = data
      this.activitiesAfficher=this.activities}

      );
      this.adService.getAdmin().subscribe(data => this.user=data.username)

       this.Filtre = new FormGroup ({

        cat: new FormControl(""),
        date: new FormControl("")
      })
      

  }
  
  filtre1() {
    let cat = this.Filtre.get("cat").value;
    if (cat != "")
      this.activitiesAfficher = this.activitiesAfficher.filter(e => e.categorie == cat)
    else{
      this.activitiesAfficher = this.activities;
      this.filtre2()}

  }

  filtre2() {
    let date = this.Filtre.get("date").value;
    if (date != "")
      this.activitiesAfficher = this.activitiesAfficher.filter(e => e.date_act >= date)
    else{
       this.activitiesAfficher = this.activities;
      this.filtre1()
    }

  }

  reset(){
    this.Filtre.reset({cat:[""]})
    this.activitiesAfficher = this.activities;
  }


}
