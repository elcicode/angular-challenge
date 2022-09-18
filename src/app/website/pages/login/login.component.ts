import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {


  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { }


  form: FormGroup = this.formBuilder.group({
      email: ['challenge@alkemy.org',[Validators.required, Validators.minLength(4)]],
      password: ['react']
  })

  login() {
    if (this.form.valid) {
      this.authService.login(this.form.controls['email'].value, this.form.controls['password'].value)
      .subscribe(rta => {
        localStorage.setItem('token', rta.access_token);
        this.router.navigate(['']);
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Login exitoso',
          showConfirmButton: false,
          timer: 1500
        })
      }, err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops... Algo salió mal!',
          text: 'Por favor, ingresa los datos correctos',
        })
      })
    }
  }
}
