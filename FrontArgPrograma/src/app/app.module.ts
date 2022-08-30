import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanerComponent } from './componentes/baner/baner.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LogoComponent } from './componentes/logo/logo.component';
import { SocialComponent } from './componentes/social/social.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { LoginComponent } from './componentes/login/login.component';
import { EducationComponent } from './componentes/education/education.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { HeaderComponent } from './componetes/header/header.component';
import { HysComponent } from './componentes/hys/hys.component';

@NgModule({
  declarations: [
    AppComponent,
    BanerComponent,
    InicioComponent,
    LogoComponent,
    SocialComponent,
    FooterComponent,
    LoginComponent,
    EducationComponent,
    ExperienciaComponent,
    HeaderComponent,
    HysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
