import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UrlService } from './url.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarios : Usuario[] = [
    /* {
        id: 7,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg",
        birth_date: new Date(1996,10,24)
    },
    {
        id: 8,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg",
        birth_date: new Date(1996,10,24)
    },
    {
        id: 9,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg",
        birth_date: new Date(1996,10,24)
    },
    {
        id: 10,
        email: "byron.fields@reqres.in",
        first_name: "Byron",
        last_name: "Fields",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg",
        birth_date: new Date(1996,10,24)
    },
    {
        id: 11,
        email: "george.edwards@reqres.in",
        first_name: "George",
        last_name: "Edwards",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg",
        birth_date: new Date(1996,10,24)
    },
    {
        id: 12,
        email: "rachel.howell@reqres.in",
        first_name: "Rachel",
        last_name: "Howell",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg",
        birth_date: new Date(1996,10,24)
    } */
];
private URL_API : string = "users";

  constructor(private http : HttpClient, private url : UrlService) {
  }

  getUsuarios() : Usuario[] {
    return this.usuarios;
  }

  getUsuario(id : number) : Observable<any> {
    //return this.usuarios.filter(u => u.id == id)[0];
    return this.http.get<Usuario[]>(this.url.getURLBase() + this.URL_API + id);
  }

  get() : Observable<any> {
    return this.http.get<Usuario[]>(this.url.getURLBase() + this.URL_API);
  }

  getFiltrado(txt : string) : Observable<any> {
    return this.http.get<Usuario[]>(this.url.getURLBase() + this.URL_API + '?last_name=' + txt); 
  }
}

export interface Usuario {
  id : number;
  email : string;
  first_name : string;
  last_name : string;
  avatar : string;
  birth_date : Date;
}