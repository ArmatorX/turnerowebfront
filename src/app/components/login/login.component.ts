import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { HttpParams } from '@angular/common/http';
import { ValidatorFn, AbstractControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  txtUsuario: string;
  txtPassword: string;
  
  constructor(private router : Router, private formatFecha : DatePipe, private servicioAuth: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    if (this.txtUsuario === 'admin' && this.txtPassword === 'admin') {
      this.servicioAuth.setLoggedIn(true);
      this.router.navigate(['/home']);
    }
    else {
      alert("Login incorrecto.");
    }
  }
}
