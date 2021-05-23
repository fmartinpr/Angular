import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from '../../models/usuario.model';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public usuario: UsuarioModel;
  public isRecordarUsuario: boolean;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit(
  ) {
    this.usuario = new UsuarioModel();
    this.isRecordarUsuario = false;

    if (localStorage.getItem('email')) {
      this.usuario.email = localStorage.getItem('email');
      this.isRecordarUsuario = true;
    }
  }

  public login(form: NgForm) {
    if (form.invalid) { return }

    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();

    this.authService.login(this.usuario).subscribe(
      resp => {

        Swal.close();

        if (this.isRecordarUsuario) {
          localStorage.setItem('email', this.usuario.email);
        } else {
          localStorage.removeItem('email');
        }

        this.router.navigateByUrl('/home');
      },
      err => {
        console.error(err.error.error.message);
        Swal.fire({
          type: 'error',
          title: 'Error al autenticar',
          text: 'Usuario o clave incorrecta...'
        });
      }
    );
  }

}
