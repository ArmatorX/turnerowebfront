import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class TurnoService {
  private turnos : Turno[] = [];
  private URL_API : string = "https://reqres.in/api/users?page=1";
  private URL_API_ID : string = "https://reqres.in/api/users/";

  constructor(private _http: HttpClient, private _url : UrlService) {
    console.log("ServicioTurno all systems GO!");
   }

   getTurnos() : Turno[] {
    return this.turnos;
   }

  getTurno(id : number) : Observable<any> {
   return this._http.get<Turno[]>(this._url.getURLBase() + 'turno/' + id)
  }

  get() : Observable<any> {
   return this._http.get<Turno[]>(this._url.getURLBase() + 'turno?page=1');
  }

  getFiltrado(params : HttpParams) : Observable<any>{
   return this._http.get<Turno[]>(this._url.getURLBase(), {params : params});
  }

  getFiltradoPorFecha(txt : string) : Observable<any>{
   return this._http.get<Turno[]>(this._url.getURLBase() + 'turno?fecha='+txt);
  }
 
  guardarTurno(turno: any) : Observable<any>{
   return this._http.post(this._url.getURLBase() + 'turno', turno);
  }

}

export interface Turno {
  id? : number;
  orden? : string;
  fecha: Date;
  nombreApellido : string;
  Categoria : string;
}
