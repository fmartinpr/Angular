import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaisService } from '../../service/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  public usuario = {
    nombre: 'Fermín',
    apellido: 'Martín',
    email: 'fmgarcia@hotmail.es',
    pais: ''
  };

  paises: any[] = [];
  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    this.paisService.getPaises().subscribe(
      paises => {
        this.paises = paises;

        this.paises.unshift({
          nombre: '[Seleccione Pais]',
          codigo: ''
        });
      }
    );
  }

  public guardar(frm: NgForm){
    console.log('submit disparado');
    if(frm.invalid){
      Object.values(frm.form.controls).forEach(control => {
        control.markAllAsTouched();
      });
      return;
    }

    console.log(frm.form.controls.nombre.value);
    console.log(frm.form.controls.apellido.value);
    console.log(frm.form.controls.email.value);
    console.log(frm.form.controls.pais.value)
  }

}
