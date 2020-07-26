import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { TurnoService } from './services/turno.service';
import { UrlService } from './services/url.service';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NuevoturnoComponent } from './components/nuevoturno/nuevoturno.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BuscarturnoComponent } from './components/buscarturno/buscarturno.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NuevoturnoComponent,
    NavbarComponent,
    BuscarturnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
