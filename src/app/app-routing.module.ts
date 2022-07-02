import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FichePosteComponent } from './fiche-poste/fiche-poste.component';
import { PostesPageComponent } from './postes-page/postes-page.component';
import { EspaceCondidat2Component } from './espace-condidat2/espace-condidat2.component';
import { DemandesCondidatComponent } from './demandes-condidat/demandes-condidat.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { EspaceCondidatComponent } from './espace-condidat/espace-condidat.component';
import { ErrorPopupComponent } from './error-popup/error-popup.component';
import { SuccessPopupComponent } from './success-popup/success-popup.component';
import { UploadPopupComponent } from './upload-popup/upload-popup.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { ProfileComponent } from './profile/profile.component';
import { OffresComponent } from './offres/offres.component';
import { CandidaturesComponent } from './candidatures/candidatures.component';
import { TestTechniquesComponent } from './test-techniques/test-techniques.component';
import { EntretienRHsComponent } from './entretien-rhs/entretien-rhs.component';

const routes: Routes = [
{ path : '', component : PageAccueilComponent },
{ path : 'Register', component : RegisterComponent },
{ path : 'Login', component : LoginComponent},
{ path : 'FichePoste', component : FichePosteComponent },
{ path : 'PostesPage', component : PostesPageComponent},
{ path : 'EspaceCondidat', component : EspaceCondidatComponent },
{ path : 'EspaceCondidat2', component : EspaceCondidat2Component }, // http://localhost:4200/EspaceCondidat2
{ path : 'DemandesCondidat', component : DemandesCondidatComponent },
{ path : 'UpdateProfile', component : UpdateProfileComponent },
{ path : 'Error', component : ErrorPopupComponent },
{ path : 'Success', component : SuccessPopupComponent },
{ path : 'Upload', component : UploadPopupComponent },
{ path : 'Profile', component : ProfileComponent },
{ path : 'Offres', component : OffresComponent },
{ path : 'Candidatures', component : CandidaturesComponent},
{ path : 'TestTechniques', component : TestTechniquesComponent },
{ path : 'EntretienRHs', component : EntretienRHsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
