import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './composants/fontOffice/dash/dash.component';
import { ListeActiviteComponent } from './composants/fontOffice/liste-activite/liste-activite.component';
import { AboutUsComponent } from './composants/fontOffice/about-us/about-us.component';
import { PubComponent } from './composants/fontOffice/pub/pub.component';
import { ActiviteSelectedComponent } from './composants/fontOffice/activite-selected/activite-selected.component';
import { DashAdminComponent } from './composants/backOffice/dash-admin/dash-admin.component';
import { LoginComponent } from './composants/backOffice/login/login.component';
import { ListAcitiviteAdminComponent } from './composants/backOffice/list-acitivite-admin/list-acitivite-admin.component';
import { ChangerPWDComponent } from './composants/backOffice/changer-pwd/changer-pwd.component';
import { ErreurComponent } from './composants/erreur/erreur.component';
import { AdminMenuComponent } from './composants/backOffice/admin-menu/admin-menu.component';
import { adminGuard } from './guards/admin.guard';
import { ModifierComponent } from './composants/backOffice/modifier/modifier.component';
import { AjouterComponent } from './composants/backOffice/ajouter/ajouter.component';
import { BoiteComponent } from './composants/backOffice/boite/boite.component';
import { ChangerUserNameComponent } from './composants/backOffice/changer-user-name/changer-user-name.component';
import { AjouterMembreComponent } from './composants/backOffice/ajouter-membre/ajouter-membre.component';

const routes: Routes = [

  {path:"",component:DashComponent, children:
[{path:"home",title:"Home",component:ListeActiviteComponent},
{path:"act/:id",title:"Activitée",component:ActiviteSelectedComponent},
{path:"aboutus",title:"About Us", component:AboutUsComponent},
{path:"pub",title:"Movies",component:PubComponent},
{path:"",redirectTo:"home",pathMatch:"full"}
]
},

{path:"login",title:"Authentification",component:LoginComponent},

{path:"admin",component:DashAdminComponent, canActivate:[adminGuard] ,children:
[{path:"menu",title:"Welcome Admin",component:AdminMenuComponent},
{path:"acts",title:"List Activity",component:ListAcitiviteAdminComponent},
{path:"pwd",title:"Changer Mot de passe", component:ChangerPWDComponent},
{path:"modifier/:id",title:"Modifier Act", component:ModifierComponent},
{path:"ajouter",title:"Ajouter Act", component:AjouterComponent},
{path:"boite",title:"Boite des suggestions", component:BoiteComponent},
{path:"user",title:"Changer User Name", component:ChangerUserNameComponent},
{path:"ajouterRes",title:"Ajouter Res", component:AjouterMembreComponent},
{path:"",redirectTo:"menu",pathMatch:"full"}
]
},

{path:"**",title:"Erreur",component:ErreurComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
