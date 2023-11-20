import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/classes/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-changer-user-name',
  templateUrl: './changer-user-name.component.html',
  styleUrls: ['./changer-user-name.component.css']
})
export class ChangerUserNameComponent implements OnInit {
  
  constructor(private adService: AdminService, private route: Router,private formBuilder:FormBuilder ) { }

  user: string 
  admin:Admin
  changerUser:FormGroup


  ngOnInit(): void {
    this.changerUser=this.formBuilder.group({
      u:[''],
      pwd:['']
    })

    this.adService.getAdmin().subscribe(data =>{ this.user=data.username
      this.admin=data})

  }



  onChange() {
    let u =this.changerUser.get('u').value;
    let pwd =this.changerUser.get('pwd').value;
    if (this.admin.pwd == pwd) {
      this.admin.username=u;
      this.adService.setAdmin(this.admin).subscribe()
      alert("User Name changer avec succes!")
      this.route.navigate(['/admin/menu'])
    }
    else
      alert("Impossible de changer le mot de passe!")
  }


}
