import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FichePosteComponent } from './fiche-poste/fiche-poste.component';
import { PostesPageComponent } from './postes-page/postes-page.component';
import { EspaceCondidat2Component } from './espace-condidat2/espace-condidat2.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DemandesCondidatComponent } from './demandes-condidat/demandes-condidat.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { EspaceCondidatComponent } from './espace-condidat/espace-condidat.component';
import { ErrorPopupComponent } from './error-popup/error-popup.component';
import { SuccessPopupComponent } from './success-popup/success-popup.component';
import { UploadPopupComponent } from './upload-popup/upload-popup.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ProfileComponent } from './profile/profile.component';
import { UserService } from './shared/user.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { OffresComponent } from './offres/offres.component';
import { CandidaturesComponent } from './candidatures/candidatures.component';
import { TestTechniquesComponent } from './test-techniques/test-techniques.component';
import { EntretienRHsComponent } from './entretien-rhs/entretien-rhs.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    FichePosteComponent,
    PostesPageComponent,
    EspaceCondidat2Component,
    DemandesCondidatComponent,
    UpdateProfileComponent,
    EspaceCondidatComponent,
    ErrorPopupComponent,
    SuccessPopupComponent,
    UploadPopupComponent,
    HeaderComponent,
    FooterComponent,
    PageAccueilComponent,
    ProfileComponent,
    OffresComponent,
    CandidaturesComponent,
    TestTechniquesComponent,
    EntretienRHsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatFormFieldModule
  ],
  providers: [UserService, {
    provide : HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
