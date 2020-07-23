import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { ProductoComponent } from './components/producto/producto.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioService } from './services/usuario.service';
import { UsuarioEspecificoComponent } from './components/usuario-especifico/usuario-especifico.component';
import { UrlService } from './services/url.service';
import { NuevoUsuarioComponent } from './components/nuevo-usuario/nuevo-usuario.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    EmpresaComponent,
    ProductoComponent,
    HomeComponent,
    NavbarComponent,
    UsuarioComponent,
    UsuarioEspecificoComponent,
    NuevoUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UsuarioService, UrlService],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
