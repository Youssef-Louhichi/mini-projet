import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/classes/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-changer-pwd',
  templateUrl: './changer-pwd.component.html',
  styleUrls: ['./changer-pwd.component.css']
})
export class ChangerPWDComponent implements OnInit {

  constructor(private adService: AdminService, private route: Router, private formBuilder: FormBuilder) { }

  user: string;
  admin: Admin;
  changerPwd: FormGroup

  ngOnInit(): void {
    this.changerPwd = this.formBuilder.group({
      pwd1: [''],
      pwd2: [''],
      pwd3: ['']

    })
    this.adService.getAdmin().subscribe(data => {
      this.user = data.username
      this.admin = data
    })

  }




  onChange() {
    let pwd1 = this.changerPwd.get('pwd1').value;
    let pwd2 = this.changerPwd.get('pwd2').value;
    let pwd3 = this.changerPwd.get('pwd3').value;
    if (this.admin.pwd == pwd1 && pwd2 == pwd3) {
      this.admin.pwd = pwd2
      this.adService.setAdmin(this.admin).subscribe()
      alert("Mot de passe changer avec succes!")
      this.route.navigate(['/admin/menu'])
    }
    else
      alert("Impossible de changer le mot de passe!")
  }

}
