import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { ProductoComponent } from './components/producto/producto.component';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { UsuarioEspecificoComponent } from './components/usuario-especifico/usuario-especifico.component';
import { FormsModule } from '@angular/forms';
import { NuevoUsuarioComponent } from './components/nuevo-usuario/nuevo-usuario.component';

const routes: Routes = [
  // Esto rutea la url /contacto al componente Contacto.
  { path : '', component : HomeComponent },
  { path : 'contacto', component : ContactoComponent },
  { path : 'empresa', component : EmpresaComponent },
  { path : 'producto', component : ProductoComponent},
  { path : 'usuario', component : UsuarioComponent},
  { path : 'usuario/:id', component : UsuarioEspecificoComponent},
  { path : 'usuario/nuevo', component : NuevoUsuarioComponent},
  { path : '**', pathMatch: 'full', redirectTo : '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule, FormsModule]
})
export class AppRoutingModule { }
