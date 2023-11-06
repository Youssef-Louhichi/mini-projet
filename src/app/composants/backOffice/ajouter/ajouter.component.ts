import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from 'src/app/classes/activity';
import { MembreResponsable } from 'src/app/classes/membre-responsable';
import { ActivitiesService } from 'src/app/services/activities.service';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-ajouter',
  templateUrl: './ajouter.component.html',
  styleUrls: ['./ajouter.component.css']
})
export class AjouterComponent implements OnInit{


  constructor(private actService: ActivitiesService, private route: Router, private resService: MembersService) { }

  lesresponsables: MembreResponsable[];
  tab: MembreResponsable[] = [];
  lesactivitees: Activity[];

  ngOnInit(): void {
    this.actService.getActs().subscribe( data => this.lesactivitees = data);
    this.resService.getMembers().subscribe(data => this.lesresponsables=data);
  }


  onAjoute(id: string, int: string, ph: string, date: string, cat: string, lieu: string, prix: string, lim: boolean) {
    if (!this.lesactivitees.find(e => e.id == Number(id))) {

      if (ph == "") {
        ph = "assets/activity.png"
      }
      else {
        ph = "assets\\" + ph.split("\\")[2];
      }

      if (lim) {
        this.tab = this.lesresponsables;
      }

      let newAct = new Activity(Number(id), int, ph, new Date(date), cat, lieu, this.tab, Number(prix), lim)
      this.actService.ajouter(newAct).subscribe(data => this.lesactivitees.unshift(data) )     
        this.route.navigate(['/admin/acts'])
    }
    else {
      alert("Id existe déjà pour une autre activitée.")
    }
  }

  test(id: string, int: string, date: string, lieu: string) {
    if (id == "" || int == "" || date == "" || lieu == "") {
      document.getElementById("butt").setAttribute("disabled", "true")
    }
    else {
      document.getElementById("butt").removeAttribute("disabled")
    }
  }

}
