import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dash-admin',
  templateUrl: './dash-admin.component.html',
  styleUrls: ['./dash-admin.component.css']
})
export class DashAdminComponent {

  constructor(private router:Router,private auth:AuthService){}
  logout(){
    this.auth.logout()
    this.router.navigate(['/home'])
  }
}
