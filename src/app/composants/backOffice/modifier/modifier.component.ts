import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Activity } from 'src/app/classes/activity';
import { ActivitiesService } from 'src/app/services/activities.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit{
  constructor(private activities:ActivitiesService,private activatedRoute:ActivatedRoute){}
  lesactivities:Activity[]=[];


  act:Activity;
  id:number;
  ngOnInit(): void {
    
    this.lesactivities=this.activities.getActs();
    this.id= this.activatedRoute.snapshot.params['id'];
    this.act=this.lesactivities.find(e => e.id==this.id)
    
  }
}
