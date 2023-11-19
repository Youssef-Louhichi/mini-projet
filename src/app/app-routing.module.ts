import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './composants/fontOffice/dash/dash.component';
import { DashAdminComponent } from './composants/backOffice/dash-admin/dash-admin.component';
import { LoginComponent } from './composants/backOffice/login/login.component';
import { ErreurComponent } from './composants/erreur/erreur.component';
import { adminGuard } from './guards/admin.guard';


const routes: Routes = [

  {
    path: "", component: DashComponent, loadChildren: () => import('./modules/front/front.module').then(
      m => m.FrontModule)

  },

  { path: "login", title: "Authentification", component: LoginComponent },

  {
    path: "admin", component: DashAdminComponent, canActivate: [adminGuard], loadChildren: () => import('./modules/admin/admin.module').then(
      m => m.AdminModule)

  },

  { path: "**", title: "Erreur", component: ErreurComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
