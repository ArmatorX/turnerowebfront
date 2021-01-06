import { Component, OnInit } from '@angular/core';
import { TurnoService, Turno } from 'src/app/services/turno.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  turnosDelDia : Turno[] = [];
  
  paginaActual : number;
  cantidadPaginas : number;
  esPrimerPagina : boolean;
  esUltimaPagina : boolean;
  
  constructor(private servicioTurno : TurnoService, private router : Router, private formatFecha : DatePipe, private route: ActivatedRoute) {
    
  }

  ngOnInit(): void { 
    this.route.params.subscribe(params => {
      if  (params.page == undefined) {
        this.paginaActual = 0;
      } else if (params.page === "NaN") {
        this.router.navigate(['']);
      } else {
        this.paginaActual = parseInt(params.page);
      }
      
      this.buscarTurnosDelDía(this.paginaActual);
    });
  }

  buscarTurnosDelDía(pagina : number = 0) {
    let params = new HttpParams();

    params = params.append('page', pagina.toString());
    params = params.append('size', "10");
    params = params.append('sort', "fecha");
    params = params.append('sort', "hora");

    params = params.append('fecha', this.formatFecha.transform(new Date(), "dd-MM-yyyy"));

    this.servicioTurno.getFiltrado(params).subscribe(respuesta => {
      if (this.paginaActual > respuesta.totalPages) {
        this.router.navigate(['home/0']);
      }

      this.turnosDelDia = respuesta.content; 

      this.cantidadPaginas = respuesta.totalPages;
      this.esPrimerPagina = respuesta.first;
      this.esUltimaPagina = respuesta.last;
    });
  } 

  primeraPagina() {
    this.router.navigate(['home/0']);
  }

  paginaSiguiente() {
    this.router.navigate(['home/' + (this.paginaActual + 1)]);
  }

  paginaAnterior() {
    this.router.navigate(['home/' + (this.paginaActual - 1)]);
  }

  ultimaPagina() {
    this.router.navigate(['home/' + (this.cantidadPaginas - 1)]);
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
      });
    }
    )}
}
