import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminMenuComponent } from 'src/app/composants/backOffice/admin-menu/admin-menu.component';
import { AjouterMembreComponent } from 'src/app/composants/backOffice/ajouter-membre/ajouter-membre.component';
import { AjouterComponent } from 'src/app/composants/backOffice/ajouter/ajouter.component';
import { BoiteComponent } from 'src/app/composants/backOffice/boite/boite.component';
import { ChangerPWDComponent } from 'src/app/composants/backOffice/changer-pwd/changer-pwd.component';
import { ChangerUserNameComponent } from 'src/app/composants/backOffice/changer-user-name/changer-user-name.component';
import { ConsulterMembreComponent } from 'src/app/composants/backOffice/consulter-membre/consulter-membre.component';
import { ListAcitiviteAdminComponent } from 'src/app/composants/backOffice/list-acitivite-admin/list-acitivite-admin.component';
import { ModifierComponent } from 'src/app/composants/backOffice/modifier/modifier.component';

const routes: Routes = [{path:"menu",title:"Welcome Admin",component:AdminMenuComponent},
{path:"acts",title:"List Activity",component:ListAcitiviteAdminComponent},
{path:"pwd",title:"Changer Mot de passe", component:ChangerPWDComponent},
{path:"modifier/:id",title:"Modifier Act", component:ModifierComponent},
{path:"ajouter",title:"Ajouter Act", component:AjouterComponent},
{path:"boite",title:"Boite des suggestions", component:BoiteComponent},
{path:"user",title:"Changer User Name", component:ChangerUserNameComponent},
{path:"ajouterRes",title:"Ajouter Res", component:AjouterMembreComponent},
{path:"consRes",title:"Consulter Res", component:ConsulterMembreComponent},
{path:"",redirectTo:"menu",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
