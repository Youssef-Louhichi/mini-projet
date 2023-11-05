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

  test(id:string,int:string,date:string,lieu:string){
    if(id=="" || int=="" || date=="" || lieu==""){
      document.getElementById("butt").setAttribute("disabled","true")
    }
    else{      
      document.getElementById("butt").removeAttribute("disabled")
  }
  }
    
  

  modifier(id:string,int:string,ph:string,date:string,cat:string,lieu:string,prix:string,ch:boolean){
    
    if(!this.lesactivities.find(e=>e.id==Number(id))){

    if(ph==""){
      ph="assets/activity.png"
    }
    else{     
       ph="assets\\"+ph.split("\\")[2];
    }
    this.service.modifierService(this.idInit,id,int,ph,date,cat,lieu,prix,ch)
    this.route.navigate(['/admin/acts'])
  }
  else{
    alert("Id existe déjà pour une autre activitée.")
  }

  }

  Annuler(){
    this.route.navigate(['/admin/acts'])
  }
}
