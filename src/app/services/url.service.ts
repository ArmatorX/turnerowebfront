import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private urlBaseTurno : string = "http://localhost:8080/turno";
  private urlBaseCategoria : string = "http://localhost:8080/categoria";

  getURLBaseTurno() : string {
    return this.urlBaseTurno;
  }
  getURLBaseCategoria() : string {
    return this.urlBaseCategoria;
  }
  
  constructor() { }
}
