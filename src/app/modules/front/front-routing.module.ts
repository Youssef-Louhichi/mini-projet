import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from 'src/app/composants/fontOffice/about-us/about-us.component';
import { ActiviteSelectedComponent } from 'src/app/composants/fontOffice/activite-selected/activite-selected.component';
import { AjouterSuggestionComponent } from 'src/app/composants/fontOffice/ajouter-suggestion/ajouter-suggestion.component';
import { ListeActiviteComponent } from 'src/app/composants/fontOffice/liste-activite/liste-activite.component';
import { PubComponent } from 'src/app/composants/fontOffice/pub/pub.component';

const routes: Routes = [{path:"home",title:"Home",component:ListeActiviteComponent},
{path:"act/:id",title:"Activitée",component:ActiviteSelectedComponent},
{path:"aboutus",title:"About Us", component:AboutUsComponent},
{path:"pub",title:"Movies",component:PubComponent},
{path:"sug",title:"Suggestion", component:AjouterSuggestionComponent},

{path:"",redirectTo:"home",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
