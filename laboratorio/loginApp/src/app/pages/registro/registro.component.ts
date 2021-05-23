import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuario.model';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  public usuario: UsuarioModel;
  public isRecordarUsuario: boolean;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
    this.usuario = new UsuarioModel();
  }

  public onSubmit(form: NgForm): void {
    if (form.invalid) { return; }

    Swal.fire({
      allowOutsideClick: false,
      type: 'info',
      text: 'Espere por favor...'
    });
    Swal.showLoading();

    this.authService.nuevoUsuario(this.usuario).subscribe(rest => {
      if (this.isRecordarUsuario) {
        localStorage.setItem('email', this.usuario.email);
      }

      Swal.close();

      this.router.navigateByUrl('/home');
    },
      err => {
        Swal.fire({
          type: 'error',
          title: 'Error al crear usuario',
          text: err.error.error.message
        });
      });
  }
}
