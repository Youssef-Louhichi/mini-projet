import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})
export class AdminMenuComponent implements OnInit {

  constructor(private service:AdminService){}
  user:string
  ngOnInit(): void {
    this.service.getAdmin().subscribe(data => this.user=data.username)
    
  }

}
