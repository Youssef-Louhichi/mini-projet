import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-changer-user-name',
  templateUrl: './changer-user-name.component.html',
  styleUrls: ['./changer-user-name.component.css']
})
export class ChangerUserNameComponent {
  
  constructor(private auth: AuthService, private route: Router,private formBuilder:FormBuilder ) { }

  user: string = this.auth.getUser();

  changerUser:FormGroup=this.formBuilder.group({
    u:[''],
    pwd:['']
  })


  onChange() {
    let u =this.changerUser.get('u').value;
    let pwd =this.changerUser.get('pwd').value;
    if (this.auth.changerU(u, pwd)) {
      alert("User Name changer avec succes!")
      this.route.navigate(['/admin/menu'])
    }
    else
      alert("Impossible de changer le mot de passe!")
  }


}
