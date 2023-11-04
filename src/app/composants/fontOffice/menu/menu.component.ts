import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private router: Router) { }


  goLogin() {

     if(localStorage.getItem('state')=="connected"){
      this.router.navigate(['/admin/menu'])
     }
     else{
    this.router.navigate(['/login'])
     }
  }


}
