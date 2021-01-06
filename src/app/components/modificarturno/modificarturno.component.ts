import { Component, OnInit } from '@angular/core';
import { TurnoService, Turno } from 'src/app/services/turno.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Categoria, CategoriaService } from 'src/app/services/categoria.service';
import { platformBrowserTesting } from '@angular/platform-browser/testing';

@Component({
  selector: 'app-modificarturno',
  templateUrl: './modificarturno.component.html',
  styleUrls: ['./modificarturno.component.css']
})
export class ModificarturnoComponent implements OnInit {
  txtNombreApellido : string;
  txtFecha : string;
  txtCategoria : number;
  txtHora : string;
  txtMinutos : string;
  txtOrden : number;
  yaEnvioFormulario : boolean;
  turnoCreado : any;
  categorias : Categoria[] = [];

  constructor(private servicioTurno : TurnoService, private servicioCategoria : CategoriaService, private router : Router, private formatFecha : DatePipe, private activeRt : ActivatedRoute)
  {
    this.yaEnvioFormulario = false;
  }

  ngOnInit(): void {
    const turnoId : string = this.activeRt.snapshot.paramMap.get("id");

    this.turnoCreado = {
      id : parseInt(turnoId),
      orden : null,
      fecha : null,
      hora : null,
      nombreApellido : null,
      categoria : {
        id : null,
        nombre : null,
        descripcion : null
      }
    };

    this.servicioCategoria.get().subscribe(respuesta => {
      this.categorias = respuesta;
    });

    this.servicioTurno.getTurno(parseInt(turnoId)).subscribe(respuesta => {
      this.txtNombreApellido = respuesta.nombreApellido;
      this.txtCategoria = respuesta.categoria.id;
      this.txtOrden = respuesta.orden;
    });
  }

  guardarCambios() {
    if (this.controlarCampos()) {
      const turnoId : string = this.activeRt.snapshot.paramMap.get("id");
    
      let categoriaSeleccionada : Categoria;
      categoriaSeleccionada = this.categorias.filter(c => c.id == this.txtCategoria)[0];
      
      let nuevoTurno : Turno = {
        id : parseInt(turnoId),
        orden : this.txtOrden,
        fecha : this.formatFecha.transform(this.txtFecha, "dd-MM-yyyy"),
        hora : `${this.txtHora}:${this.txtMinutos}:00`,
        nombreApellido : this.txtNombreApellido,
        categoria : categoriaSeleccionada
      };
      
      this.servicioTurno.modificarTurno(parseInt(turnoId), nuevoTurno).subscribe(respuesta => {
        this.yaEnvioFormulario = true;
        this.turnoCreado = respuesta;
      });
      
    }
    else {
      alert("Por favor llenar todos los campos.");
    }
  }

  controlarCampos() : boolean {
    let noHayErrores : boolean = true;

    if (this.txtOrden == undefined) {
      noHayErrores = false;
    } 

    if (this.txtHora == undefined || this.txtMinutos == undefined)  {
      noHayErrores = false;
    } else {
      let fecha : Date = new Date(this.txtFecha);
      fecha = new Date(fecha.getFullYear(), fecha.getMonth(), fecha.getDate() + 1, parseInt(this.txtHora), parseInt(this.txtMinutos));
      console.log(fecha);

      if (this.txtFecha == undefined) {
        noHayErrores = false;
      } else if (fecha < new Date()) {
        noHayErrores = false;
      }
    }

    if (this.txtNombreApellido == undefined) {
      noHayErrores = false;
    } else if (this.txtNombreApellido == "" || this.txtNombreApellido == " ") {
      noHayErrores = false;
    }

    if (this.txtCategoria == undefined) {
      noHayErrores = false;
    }

    return noHayErrores;
  }

  limpiarFiltros() {
    this.txtNombreApellido = undefined;
    this.txtFecha = undefined;
    this.txtHora = undefined;
    this.txtMinutos = undefined;
    this.txtCategoria = undefined;
  }

  modificarTurno(t : Turno){
    this.servicioTurno.getTurno(t.id).subscribe(respuesta => {
      this.router.navigate(['/modificarturno', respuesta.id]);
    });
  }

  borrarTurno(t : Turno) {
    this.servicioTurno.getTurno(t.id).subscribe(respuesta => {
      console.log(respuesta.id);
      this.servicioTurno.borrarTurno(respuesta.id).subscribe(respuesta => {
        console.log("Toy joya");
      });
    });
  }
}
