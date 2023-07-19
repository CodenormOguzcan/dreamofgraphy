import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import {SlickCarouselModule} from "ngx-slick-carousel";
import { PhotografySectionComponent } from './portfolio/section/photografy-section/photografy-section.component';
import { VideografySectionComponent } from './portfolio/section/videografy-section/videografy-section.component';
import { DroneSectionComponent } from './portfolio/section/drone-section/drone-section.component';
import { AllSectionComponent } from './portfolio/section/all-section/all-section.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ServicesComponent,
    PortfolioComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    PhotografySectionComponent,
    VideografySectionComponent,
    DroneSectionComponent,
    AllSectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
