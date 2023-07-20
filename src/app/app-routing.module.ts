import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {VideografySectionComponent} from "./portfolio/section/videografy-section/videografy-section.component";
import {PhotografySectionComponent} from "./portfolio/section/photografy-section/photografy-section.component";
import {DroneSectionComponent} from "./portfolio/section/drone-section/drone-section.component";
import {AllSectionComponent} from "./portfolio/section/all-section/all-section.component";
import {ImpressumComponent} from "./impressum/impressum.component";


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'video-section', component: VideografySectionComponent},
  { path: 'drone-section', component: DroneSectionComponent},
  { path: 'photografy-section', component: PhotografySectionComponent},
  { path: 'all-inclusive-section', component: AllSectionComponent},
  { path: 'impressum', component: ImpressumComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
