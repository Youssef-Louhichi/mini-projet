import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from 'src/app/classes/activity';
import { ActivitiesService } from 'src/app/services/activities.service';

@Component({
  selector: 'app-modifier',
  templateUrl: './modifier.component.html',
  styleUrls: ['./modifier.component.css']
})
export class ModifierComponent implements OnInit{
  constructor(private service:ActivitiesService,private activatedRoute:ActivatedRoute,
    private route:Router){}
  lesactivities:Activity[]=[];


  act:Activity;
  idInit:number;
  ngOnInit(): void {
    
    this.lesactivities=this.service.getActs();
    this.idInit= this.activatedRoute.snapshot.params['id'];
    this.act=this.lesactivities.find(e => e.id==this.idInit)
    
  }

  modifier(id:string,int:string,ph:string,date:string,cat:string,lieu:string,prix:string,ch:boolean){
    this.service.modifierService(this.idInit,id,int,ph,date,cat,lieu,prix,ch)
    this.route.navigate(['/admin/acts'])
  }

  Annuler(){
    this.route.navigate(['/admin/acts'])
  }
}
