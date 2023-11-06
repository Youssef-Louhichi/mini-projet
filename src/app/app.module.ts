import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './composants/fontOffice/menu/menu.component';
import { AboutUsComponent } from './composants/fontOffice/about-us/about-us.component';
import { ListeActiviteComponent } from './composants/fontOffice/liste-activite/liste-activite.component';
import { ActiviteSelectedComponent } from './composants/fontOffice/activite-selected/activite-selected.component';
import { PubComponent } from './composants/fontOffice/pub/pub.component';
import { LoginComponent } from './composants/backOffice/login/login.component';
import { AdminMenuComponent } from './composants/backOffice/admin-menu/admin-menu.component';
import { ListAcitiviteAdminComponent } from './composants/backOffice/list-acitivite-admin/list-acitivite-admin.component';
import { ChangerPWDComponent } from './composants/backOffice/changer-pwd/changer-pwd.component';
import { DashAdminComponent } from './composants/backOffice/dash-admin/dash-admin.component';
import { DashComponent } from './composants/fontOffice/dash/dash.component';
import { ErreurComponent } from './composants/erreur/erreur.component';
import { ModifierComponent } from './composants/backOffice/modifier/modifier.component';
import { AjouterComponent } from './composants/backOffice/ajouter/ajouter.component';
import { FormsModule } from '@angular/forms';
import { ListenfantComponent } from './composants/fontOffice/listenfant/listenfant.component';
import { BoiteComponent } from './composants/backOffice/boite/boite.component';
import { ChangerUserNameComponent } from './composants/backOffice/changer-user-name/changer-user-name.component';
import { AjouterMembreComponent } from './composants/backOffice/ajouter-membre/ajouter-membre.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AboutUsComponent,
    ListeActiviteComponent,
    ActiviteSelectedComponent,
    PubComponent,
    LoginComponent,
    AdminMenuComponent,
    ListAcitiviteAdminComponent,
    ChangerPWDComponent,
    DashAdminComponent,
    DashComponent,
    ErreurComponent,
    ModifierComponent,
    AjouterComponent,
    ListenfantComponent,
    BoiteComponent,
    ChangerUserNameComponent,
    AjouterMembreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
