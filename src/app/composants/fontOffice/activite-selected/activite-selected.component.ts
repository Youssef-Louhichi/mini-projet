import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Activity } from 'src/app/classes/activity';
import { ActivitiesService } from 'src/app/services/activities.service';
@Component({
  selector: 'app-activite-selected',
  templateUrl: './activite-selected.component.html',
  styleUrls: ['./activite-selected.component.css']
})
export class ActiviteSelectedComponent implements OnInit{

  identifiant:number;
  
  act:Activity;

  lesact :Activity[];
  constructor(private activatedRoute:ActivatedRoute,private service:ActivitiesService) { }
  ngOnInit() {
    
  

    this.service.getActs().subscribe( data => {this.lesact = data ;
    
      this.identifiant = this.activatedRoute.snapshot.params['id'];  

       this.act=this.lesact.find(e => e.id == this.identifiant);
    });
   


  }



  
}
