import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private auth:AuthService,private route:Router){}

  onLogin(username:string,pwd:string){
    if(this.auth.login(username,pwd)){
      this.route.navigate(['/admin'])
    }
    else{
      alert("Login ou mot de passe erronés")
    }
  }
}
