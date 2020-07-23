import { Component, OnInit } from '@angular/core';
import { UsuarioService, Usuario } from 'src/app/services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  usuarios : Usuario[] = [];
  txtBuscador : string;

  constructor(private servicioUsuario : UsuarioService, private router : Router) { }

  ngOnInit(): void {
    this.servicioUsuario.get().subscribe((respuesta) => {
      this.usuarios = respuesta.data;
    });
  }

  verUsuario(id : number) : void {
    this.router.navigate(['/usuario', id]);
    
    // [routerLink]="['/usuario', u.id]" 
  }

  buscar() {
    this.servicioUsuario.getFiltrado(this.txtBuscador).subscribe(respuesta => {
      this.usuarios = respuesta.data;
    });
    alert(this.usuarios[0].last_name);
    //alert(this.txtBuscador);
  }
}