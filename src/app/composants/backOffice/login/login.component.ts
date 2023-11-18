import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth:AuthService,private route:Router,private formBuilder:FormBuilder){}

  logGroup:FormGroup=this.formBuilder.group({
    u:[''],
    pwd:['']
  })

  onLogin(){
    let username =this.logGroup.get('u').value;
    let pwd =this.logGroup.get('pwd').value;
    if(this.auth.login(username,pwd)){
      this.route.navigate(['/admin'])
    }
    else{
      alert("Login ou mot de passe erronés")
    }
  }
}
