import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-changer-pwd',
  templateUrl: './changer-pwd.component.html',
  styleUrls: ['./changer-pwd.component.css']
})
export class ChangerPWDComponent {

  constructor(private auth:AuthService,private route:Router){}

  user:string=this.auth.getUser();


  onChange(pwd1:string,pwd2:string,pwd3:string){
    if(this.auth.changer(pwd1,pwd2) && pwd2==pwd3){
      alert("mot de passe changer avec succes!")
      this.route.navigate(['/admin/menu'])
    }
    else
    alert("Impossible de changer le mot de passe!")
  }

}
