import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  public usuario = {
    nombre: 'Fermín'
  };
  constructor() { }

  ngOnInit(): void {

  }

  public guardar(frm: NgForm){
    console.log('submit disparado');
    console.log(frm);
    console.log(this.usuario.nombre);
  }

}
