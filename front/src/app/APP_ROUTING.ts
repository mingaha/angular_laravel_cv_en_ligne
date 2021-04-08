import { Routes, RouterModule } from '@angular/router';
import { AnnonceJobComponent } from './CvTech/annonce-job/annonce-job.component';
import { ConnexionComponent } from './CvTech/connexion/connexion.component';
import { CvComponent } from './CvTech/cv/cv.component';
import { InscriptionComponent } from './CvTech/inscription/inscription.component';
import { PageAccueilComponent } from './CvTech/page-accueil/page-accueil.component';
import { PosterAnnonceComponent } from './CvTech/poster-annonce/poster-annonce.component';




const APP_ROUTING: Routes = [
    {path : 'Accueil', redirectTo: '/', pathMatch: 'full'},
    {path: '', component : PageAccueilComponent},
    {path: 'connexion', component: ConnexionComponent},
    {path: 'inscription', component: InscriptionComponent},
    {path: 'Annonce', component: AnnonceJobComponent},
    {path:'PosterAnnonce', component : PosterAnnonceComponent},
    {path:'Cv', component : CvComponent}
];

export const ROUTING = RouterModule.forRoot(APP_ROUTING);
