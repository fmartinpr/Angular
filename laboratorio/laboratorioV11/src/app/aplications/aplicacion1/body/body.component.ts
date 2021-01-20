import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html'
})
export class BodyComponent implements OnInit {
  public frase: any = {
    mensaje: 'Un gran poder requiere una gran responsabilidad',
    autor: 'Ben Parket'
  };
  public isMostrar: boolean;
  public personajes: string[];

  constructor() {
    this.isMostrar = true;
    this.personajes = ['Jose', 'Manuel', 'María'];
  }

  ngOnInit(): void {
  }

}
