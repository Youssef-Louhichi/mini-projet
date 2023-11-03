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
export class ListAcitiviteAdminComponent implements OnInit{
  constructor(private service:ActivitiesService,private route:Router){}
  activities:Activity[];

  ngOnInit(): void {
    this.activities=this.service.getActs();
  }

  supprimer(i:number){
    this.activities.splice(i,1)
  }

  goAjouter(){
    this.route.navigate(['/admin/ajouter'])
  }
  


}
