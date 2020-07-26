import { Component, OnInit } from '@angular/core';
import { TurnoService, Turno } from 'src/app/services/turno.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-buscarturno',
  templateUrl: './buscarturno.component.html',
  styleUrls: ['./buscarturno.component.css']
})
export class BuscarturnoComponent implements OnInit {
 
  turnos : Turno[] = [];
  txtBuscador: string;
  txtFecha: any;
  txtCategoria: any;
  private servicioTurno : TurnoService;
  private router : Router;
  private formatFecha : DatePipe;
  
  constructor(
    ) { 
      //something
  }


  ngOnInit(): void { 
    this.servicioTurno.get().subscribe(respuesta => {
      this.turnos = respuesta.data;
    });
  }

  buscar() {
    let options = new HttpParams();

    options.append('nombreApellido', this.txtBuscador)
    options.append('fecha', this.txtFecha)
    options.append('categoria', this.txtCategoria)

    this.servicioTurno.getFiltrado(options).subscribe(respuesta => {
      this.turnos = respuesta.data; //data es el array donde esta la info de usuarios
    });
    //alert(this.txtBuscador);
  }

  limpiarFiltros() {
    this.txtBuscador = undefined;
    this.txtFecha = undefined;
    this.txtCategoria = undefined;
  }

  /*
  buscarPorFecha(){
    this.servicioTurno.getFiltradoPorFecha(this.formatFecha.transform(this.txtFecha, 'dd/MM/yyyy')).subscribe(respuesta => {
      this.turnos = respuesta.data;
    });
  }

  buscarPorCategoria(){
    //ToDo
  }*/
}
