import { Component, OnInit } from '@angular/core';
import { faSave, faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [
  ]
})
export class ClasesComponent implements OnInit {
  public alerta: string;
  public danger: boolean;
  public icono;
  public loading: boolean;
  public txtBotonGuardar: string;

  constructor() {
    this.alerta = 'alert-danger';
    this.danger = true;
    this.loading = false;
    this.icono = faSave;
    this.txtBotonGuardar = 'Guardar cambios';
  }

  ngOnInit(): void {
  }

  public ejecutar(): void {
    this.loading = true;
    this.icono = faSpinner;
    this.txtBotonGuardar = 'Guardando ...';
    setTimeout(() => {
      this.loading = false;
      this.icono = faSave;
      this.txtBotonGuardar = 'Guardar cambios';
    }, 3000);
  }

}
