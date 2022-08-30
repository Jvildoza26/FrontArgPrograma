import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BanerComponent } from './componentes/baner/baner.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LogoComponent } from './componentes/logo/logo.component';

@NgModule({
  declarations: [
    AppComponent,
    BanerComponent,
    InicioComponent,
    LogoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
