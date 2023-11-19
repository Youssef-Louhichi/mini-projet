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
import { AjouterSuggestionComponent } from './composants/fontOffice/ajouter-suggestion/ajouter-suggestion.component';
import { ConsulterMembreComponent } from './composants/backOffice/consulter-membre/consulter-membre.component';

const routes: Routes = [

  {path:"",component:DashComponent, loadChildren: () =>import('./modules/front/front.module').then(
    m => m.FrontModule)

},

{path:"login",title:"Authentification",component:LoginComponent},

{path:"admin",component:DashAdminComponent, canActivate:[adminGuard] ,loadChildren: () =>import('./modules/admin/admin.module').then(
  m => m.AdminModule)

},

{path:"**",title:"Erreur",component:ErreurComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
