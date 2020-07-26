import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlService {
  private urlBase : string = "https://reqres.in/api/";

  getURLBase() : string {
    return this.urlBase;
  }
  
  constructor() { }
}
