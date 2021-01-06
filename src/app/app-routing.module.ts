import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NuevoturnoComponent } from './components/nuevoturno/nuevoturno.component';
import { BuscarturnoComponent } from './components/buscarturno/buscarturno.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth/auth.guard';
import { ModificarturnoComponent } from './components/modificarturno/modificarturno.component';


const routes: Routes = [
  { path : '' , component : HomeComponent, canActivate: [ AuthGuard ] },
  { path : 'home' , component : HomeComponent, canActivate: [ AuthGuard ] },
  { path : 'nuevoturno' , component : NuevoturnoComponent,  canActivate: [ AuthGuard ] },
  { path : 'buscarturno' , component : BuscarturnoComponent,  canActivate: [ AuthGuard ] },
  { path : 'modificarturno/:id', component : ModificarturnoComponent,  canActivate: [ AuthGuard ]},
  { path : 'login', component : LoginComponent},
  { path : '**', pathMatch: 'full', redirectTo : '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
