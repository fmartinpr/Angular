import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aplication3',
  templateUrl: './aplication3.component.html'
})
export class Aplication3Component implements OnInit {

  public nombre: string;
  public nombre2: string;
  public arreglo: number[];
  public PI: number;
  public porcentaje: number;
  public salario: number;
  public heroe: any;
  public valorPromesa: Promise<String>;
  public fecha: Date;
  public idioma: string;
  public videoURL: string;
  public activar: boolean;

  constructor() {
    this.nombre = 'Capitán trueno';
    this.nombre2 = 'fErmÍn mArTíN gARcía'
    this.arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    this.PI = 1.2;
    this.porcentaje = 0.2
    this.salario = 1500.89;
    this.heroe = {
      nombre: 'Logan',
      clave: 'Wolverine',
      edad: 500,
      direccion: {
        calle: 'Primera',
        casa: 20
      }
    };
    this.fecha = new Date(1979,3,7);
    this.idioma = 'es';
    this.videoURL = 'https://www.youtube.com/embed/6fynwIfob_I';
    this.activar = false;
this.valorPromesa = new Promise<String>(resolve => {
  setTimeout(() => {
    resolve('llego la data');
  }, 4500);
});
  }

  ngOnInit(): void {

  }

}
