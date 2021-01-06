import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlService } from './url.service';
import { Time } from '@angular/common';
import { Categoria } from './categoria.service';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {
  private turnos : Turno[] = [];

  constructor(private _http: HttpClient, private _url : UrlService) {
    console.log("ServicioTurno all systems GO!");
  }

  get() : Observable<any> {
    return this._http.get<Turno[]>(this._url.getURLBaseTurno() + '?page=0&size=10&sort=fecha&sort=hora');
  }

  getTurno(id : number) : Observable<any> {
   return this._http.get<Turno[]>(this._url.getURLBaseTurno() + '/' + id)
  }

  getFiltrado(params : HttpParams) : Observable<any> {
   return this._http.get<Turno[]>(this._url.getURLBaseTurno(), {params : params});
  }

  guardarTurno(turno: Turno) : Observable<any> {
   return this._http.post<Turno>(this._url.getURLBaseTurno(), turno);
  }

  borrarTurno(id: number)  : Observable<any> {
    return this._http.delete<Turno>(this._url.getURLBaseTurno() + '/' + id);
  }

  modificarTurno(id: number, turno : Turno) : Observable<any> {
    return this._http.put<Turno>(this._url.getURLBaseTurno() + '/' + id, turno);
   }
}

export interface Turno {
  id? : number;
  orden : number;
  fecha : string;
  hora : string;
  nombreApellido : string;
  categoria : Categoria;
}
