import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UrlService } from './url.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  private categorias : Categoria[] = [];

  constructor(private _http: HttpClient, private _url : UrlService) {
    console.log("CategoriaService all systems GO!");
  }

  get() : Observable<any> {
    return this._http.get<Categoria[]>(this._url.getURLBaseCategoria());
  }

  getCategoria(id : number) : Observable<any> {
   return this._http.get<Categoria[]>(this._url.getURLBaseCategoria() + '/' + id)
  }

  getFiltrado(params : HttpParams) : Observable<any>{
   return this._http.get<Categoria[]>(this._url.getURLBaseCategoria(), {params : params});
  }

  guardarTurno(turno: any) : Observable<any>{
   return this._http.post(this._url.getURLBaseCategoria() + '', turno);
  }
}

export interface Categoria {
  id? : number;
  nombre : string;
  descripcion : string;
}
