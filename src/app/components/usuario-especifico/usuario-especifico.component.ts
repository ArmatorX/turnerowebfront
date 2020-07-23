import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService, Usuario } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-especifico',
  templateUrl: './usuario-especifico.component.html',
  styleUrls: ['./usuario-especifico.component.css']
})
export class UsuarioEspecificoComponent implements OnInit {

  usuario : Usuario;

  constructor(private activate : ActivatedRoute, private servicioUsuario : UsuarioService) { 
    this.activate.params.subscribe((respuesta) => {
      this.servicioUsuario.getUsuario(respuesta.id).subscribe(respuesta => {
        this.usuario = respuesta.data;
      });
    });
  }

  ngOnInit(): void {
  }
}
