import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvAccueilComponent } from './CvTech/cv-accueil/cv-accueil.component';
import { PageAccueilComponent } from './CvTech/page-accueil/page-accueil.component';
import { ConnexionComponent } from './CvTech/connexion/connexion.component';
import { InscriptionComponent } from './CvTech/inscription/inscription.component';
import { ROUTING } from './APP_ROUTING';
import { NavBarComponent } from './CvTech/nav-bar/nav-bar.component';
import { AnnonceJobComponent } from './CvTech/annonce-job/annonce-job.component';
import { CvComponent } from './CvTech/cv/cv.component';
import { PosterAnnonceComponent } from './CvTech/poster-annonce/poster-annonce.component';

@NgModule({
  declarations: [
    AppComponent,
    CvAccueilComponent,
    PageAccueilComponent,
    ConnexionComponent,
    InscriptionComponent,
    NavBarComponent,
    AnnonceJobComponent,
    CvComponent,
    PosterAnnonceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
