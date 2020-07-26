import { Component, OnInit } from '@angular/core';
import { TurnoService, Turno } from 'src/app/services/turno.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-nuevoturno',
  templateUrl: './nuevoturno.component.html',
  styleUrls: ['./nuevoturno.component.css']
})
export class NuevoturnoComponent implements OnInit {
  txtNombreApellido: string;
  txtFecha: any;
  txtCategoria: any;
  txtHora: string;
  txtMinutos: string;
  turnos : Turno[] = [];

  private servicioTurno : TurnoService;
  constructor() { }

  ngOnInit(): void {
    this.servicioTurno.get().subscribe(respuesta => {
      this.turnos = respuesta.data;
    });
  }

  crearTurno(){
    const turno : Turno = {
      nombreApellido:this.txtNombreApellido,
      fecha:this.txtFecha,
      Categoria:this.txtCategoria,
    }
    this.servicioTurno.guardarTurno(turno).subscribe(respuesta => {
      this.turnos = respuesta.data;
    });
  }

  limpiarFiltros() {
    this.txtNombreApellido = undefined;
    this.txtFecha = undefined;
    this.txtCategoria = undefined;
  }
}
