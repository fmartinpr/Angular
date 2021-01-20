import { Component, OnInit } from '@angular/core';
import { DatosDemoService } from '../../services/datos-demo.service';
import { Trabajador } from '../../models/trabajador';
import { Avenger } from 'src/app/models/anvenger';

@Component({
  selector: 'app-typescript',
  templateUrl: './typescript.component.html',
  styleUrls: ['./typescript.component.css']
})
export class TypescriptComponent implements OnInit {

  constructor(private datosDemoService: DatosDemoService) { }

  ngOnInit(): void {
    //const listTrabajador: Trabajador[] = this.datosDemoService.getTrabajadores();
    //console.log(listTrabajador);
    //this.pruebaPromesas1();
    //this.pruebaPromesas2();
    const antman: Avenger = new Avenger('antman', 'Equipo sur', 'Pepe gomez');
    
  }

  private pruebaPromesas1(): void {
    console.log('Inicio');
    const nombre = 'Fermín';
    const prom1 = new Promise((resolve, reject) => {
      setTimeout(() => {
        //resolve('Se terminó el timeout');
        reject(`Se ha generado un error por el usuario ${nombre}`);
      }, 1000);
    });

    prom1
      .then(mensaje => console.log(mensaje))
      .catch(err => console.warn(err));

    console.log('Fin');
  }

  private pruebaPromesas2(): void {
    const retirarDinero = (cantidadRetirar: number): Promise<number> => {
      let dineroActual = 1000;

      return new Promise((resolve, reject) => {
        if (cantidadRetirar > dineroActual) {
          reject('No hay suficientes fondos');
        } else {
          dineroActual -= cantidadRetirar;
          resolve(dineroActual);
        }
      });

    };

    retirarDinero(500)
      .then(
        dineroActual => console.log(`Me queda ${dineroActual}`)
      )
      .catch(console.warn);
  }

}
