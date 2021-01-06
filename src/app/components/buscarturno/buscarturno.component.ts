import { Component, OnInit } from '@angular/core';
import { TurnoService, Turno } from 'src/app/services/turno.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { CategoriaService, Categoria } from 'src/app/services/categoria.service';


@Component({
  selector: 'app-buscarturno',
  templateUrl: './buscarturno.component.html',
  styleUrls: ['./buscarturno.component.css']
})
export class BuscarturnoComponent implements OnInit {
  turnos : Turno[] = [];
  categorias : Categoria[] = [];
  txtBuscador: string;
  txtFecha: string;
  txtCategoria: number;

  paginaActual : number;
  cantidadPaginas : number;
  esPrimerPagina : boolean;
  esUltimaPagina : boolean;

  parametrosHTTP : HttpParams;
  
  constructor(private servicioTurno : TurnoService, private servicioCategoria : CategoriaService, private router : Router, private formatFecha : DatePipe) { }

  ngOnInit(): void { 
    this.servicioCategoria.get().subscribe(respuesta => {
      this.categorias = respuesta;
    });
  }

  buscar(pagina? : number) {
    if (pagina == undefined) {
      pagina = 0;
      this.paginaActual = pagina;

      this.parametrosHTTP = new HttpParams();

      this.parametrosHTTP = this.parametrosHTTP.append('page', pagina.toString());
      this.parametrosHTTP = this.parametrosHTTP.append('size', "10");
      this.parametrosHTTP = this.parametrosHTTP.append('sort', "fecha,desc");
      this.parametrosHTTP = this.parametrosHTTP.append('sort', "hora,desc");

      if (this.txtBuscador != undefined) {
        this.parametrosHTTP = this.parametrosHTTP.append('nombreApellido', this.txtBuscador);
      }

      if (this.txtFecha != undefined) {
        this.parametrosHTTP = this.parametrosHTTP.append('fecha', this.formatFecha.transform(this.txtFecha, 'dd-MM-yyyy'));
      }

      if (this.txtCategoria != undefined) {
        this.parametrosHTTP = this.parametrosHTTP.append('categoriaId', this.txtCategoria.toString());;
      }
    } else {
      this.paginaActual = pagina;
      this.parametrosHTTP = this.parametrosHTTP.set('page', pagina.toString());
    }

    this.servicioTurno.getFiltrado(this.parametrosHTTP).subscribe(respuesta => {
      this.turnos = respuesta.content; 

      this.cantidadPaginas = respuesta.totalPages;
      this.esPrimerPagina = respuesta.first;
      this.esUltimaPagina = respuesta.last;
    });
  }  

  limpiarFiltros() {
    this.txtBuscador = undefined;
    this.txtFecha = undefined;
    this.txtCategoria = undefined;
  }

    primeraPagina() {
      this.buscar(0);
    }
  
    paginaSiguiente() {
      this.buscar(this.paginaActual + 1);
    }
  
    paginaAnterior() {
      this.buscar(this.paginaActual - 1);
    }
  
    ultimaPagina() {
      this.buscar(this.cantidadPaginas - 1);
    }

    modificarTurno(t : Turno){
      this.servicioTurno.getTurno(t.id).subscribe(respuesta => {
        this.router.navigate(['/modificarturno', respuesta.id]);
      })
    }
    borrarTurno(t : Turno) {
      this.servicioTurno.getTurno(t.id).subscribe(respuesta => {
        console.log(respuesta.id);
        this.servicioTurno.borrarTurno(respuesta.id).subscribe(respuesta => {
          console.log("Toy joya");
          this.buscar();
        });
      }
      )}
}
