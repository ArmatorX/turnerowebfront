import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NuevoturnoComponent } from './components/nuevoturno/nuevoturno.component';
import { BuscarturnoComponent } from './components/buscarturno/buscarturno.component';


const routes: Routes = [
  { path : '' , component : HomeComponent},
  { path : 'home' , component : HomeComponent},
  { path : 'nuevoturno' , component : NuevoturnoComponent},
  { path : 'buscarturno' , component : BuscarturnoComponent},
  { path : '**', pathMatch: 'full', redirectTo : '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
