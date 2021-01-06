import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn : boolean = false;

  constructor() { }

  setLoggedIn(parameter : boolean) {
    this.loggedIn = parameter;
  }
  isLoggedIn() {
    return this.loggedIn;
  }
}
