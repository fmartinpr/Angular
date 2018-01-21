import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre:string="Fermín";
  nombre2:string="feRmín MaRTín gArcía";
  arreglo = [1,2,3,4,5,6,7,8,9,10];
  PI = Math.PI;
  porcentaje = "0.356565";
  decimal:number=1.555;
  salario:number=1234.5;
  heroe = {
    nombre : "Longan",
    clave : "Wolverine",
    edad : 300,
    direccion : {
      calle : "primera",
      casa : "19"
    }
  }

  fecha = new Date();

  valorDePromesa = new Promise((resolve, reject) =>{
    setTimeout(()=>resolve('LLego la data'), 3500);
  });

  video = "_xypgGbBsck";

  activar:boolean=true;

}
