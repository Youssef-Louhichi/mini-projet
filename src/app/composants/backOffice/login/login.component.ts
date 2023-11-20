import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/classes/admin';
import { AdminService } from 'src/app/services/admin.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private auth:AuthService,private route:Router,private formBuilder:FormBuilder,private adminSer:AdminService){}

  admin:Admin
  logGroup:FormGroup


  ngOnInit(): void {
    this.adminSer.getAdmin().subscribe(data => this.admin=data)
    this.logGroup=this.formBuilder.group({
      u:[''],
      pwd:['']
    })
  
  }

  onLogin(){
    let username =this.logGroup.get('u').value;
    let pwd =this.logGroup.get('pwd').value;
    if(this.auth.login(username,pwd,this.admin)){
      this.route.navigate(['/admin'])
    }
    else{
      alert("Login ou mot de passe erronés")
    }
  }
}
