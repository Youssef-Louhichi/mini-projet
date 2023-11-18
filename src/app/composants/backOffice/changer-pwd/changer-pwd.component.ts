import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-changer-pwd',
  templateUrl: './changer-pwd.component.html',
  styleUrls: ['./changer-pwd.component.css']
})
export class ChangerPWDComponent {

  constructor(private auth: AuthService, private route: Router,private formBuilder:FormBuilder ) { }

  user: string = this.auth.getUser();

  changerPwd:FormGroup=this.formBuilder.group({
    pwd1:[''],
    pwd2:[''],
    pwd3:['']

  })


  onChange() {
    let pwd1 =this.changerPwd.get('pwd1').value;
    let pwd2 =this.changerPwd.get('pwd2').value;
    let pwd3 =this.changerPwd.get('pwd3').value;
    if (this.auth.changerP(pwd1, pwd2) && pwd2 == pwd3) {
      alert("Mot de passe changer avec succes!")
      this.route.navigate(['/admin/menu'])
    }
    else
      alert("Impossible de changer le mot de passe!")
  }

}
