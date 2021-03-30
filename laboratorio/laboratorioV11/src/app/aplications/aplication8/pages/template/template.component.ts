import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  public usuario = {
    nombre: 'Fermín',
    apellido: 'Martín',
    email: 'García'
  };
  constructor() { }

  ngOnInit(): void {

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
  }

}
