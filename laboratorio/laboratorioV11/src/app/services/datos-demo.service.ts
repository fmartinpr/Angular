import { Injectable } from '@angular/core';
import { Trabajador } from '../models/trabajador';
import { Heroe } from '../models/heroe';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class DatosDemoService {
  constructor(private http: HttpClient) {

  }

  public getTrabajadores(): Trabajador[] {
    const listTrabajador: Trabajador[] = [];

    const t1: Trabajador = new Trabajador();
    t1.nombre = 'Jose Luis Gomez Torres';
    t1.salario = 2055.30;
    t1.activo = true;
    t1.edad = 45;
    t1.fechaContatacion = new Date('2005-11-16T00:00:00');
    t1.msFechaContatacion = t1.fechaContatacion.getTime();
    listTrabajador.push(t1);

    const t2: Trabajador = new Trabajador();
    t2.nombre = 'Maria Jimenez Gutierrez';
    t2.salario = 2500.70;
    t2.activo = true;
    t2.edad = 30;
    t2.fechaContatacion = new Date('2018-01-10T00:00:00');
    t2.msFechaContatacion = t2.fechaContatacion.getTime();
    listTrabajador.push(t2);

    const t3: Trabajador = new Trabajador();
    t3.nombre = 'Luisa García Gutierrez';
    t3.salario = 1500.70;
    t3.activo = true;
    t3.edad = 19;
    t3.fechaContatacion = new Date('2018-05-07T00:00:00');
    t3.msFechaContatacion = t3.fechaContatacion.getTime();
    listTrabajador.push(t3);

    const t4: Trabajador = new Trabajador();
    t4.nombre = 'Manuel Ruiz Martín';
    t4.salario = 5000.80;
    t4.activo = false;
    t4.edad = 69;
    t4.fechaContatacion = new Date('1980-12-15T00:00:00');
    t4.msFechaContatacion = t4.fechaContatacion.getTime();
    listTrabajador.push(t4);

    return listTrabajador;
  }

  public getHeroes(): Heroe[] {
    const heroes: Heroe[] = [
      {
        nombre: "Aquaman",
        bio: "El poder más reconocido de Aquaman es la capacidad telepática para comunicarse con la vida marina, la cual puede convocar a grandes distancias.",
        img: "assets/img/aquaman.png",
        aparicion: "1941-11-01",
        casa: "DC"
      },
      {
        nombre: "Batman",
        bio: "Los rasgos principales de Batman se resumen en «destreza física, habilidades deductivas y obsesión». La mayor parte de las características básicas de los cómics han variado por las diferentes interpretaciones que le han dado al personaje.",
        img: "assets/img/batman.png",
        aparicion: "1939-05-01",
        casa: "DC"
      },
      {
        nombre: "Daredevil",
        bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
        img: "assets/img/daredevil.png",
        aparicion: "1964-01-01",
        casa: "Marvel"
      },
      {
        nombre: "Hulk",
        bio: "Su principal poder es su capacidad de aumentar su fuerza hasta niveles prácticamente ilimitados a la vez que aumenta su furia. Dependiendo de qué personalidad de Hulk esté al mando en ese momento (el Hulk Banner es el más débil, pero lo compensa con su inteligencia).",
        img: "assets/img/hulk.png",
        aparicion: "1962-05-01",
        casa: "Marvel"
      },
      {
        nombre: "Linterna Verde",
        bio: "Poseedor del anillo de poder que posee la capacidad de crear manifestaciones de luz sólida mediante la utilización del pensamiento. Es alimentado por la Llama Verde (revisada por escritores posteriores como un poder místico llamado Starheart), una llama mágica contenida en dentro de un orbe (el orbe era en realidad un meteorito verde de metal que cayó a la Tierra, el cual encontró un fabricante de lámparas llamado Chang)",
        img: "assets/img/linterna-verde.png",
        aparicion: "1940-06-01",
        casa: "DC"
      },
      {
        nombre: "Spider-Man",
        bio: "Tras ser mordido por una araña radiactiva, obtuvo los siguientes poderes sobrehumanos, una gran fuerza, agilidad, poder trepar por paredes. La fuerza de Spider-Man le permite levantar 10 toneladas o más. Gracias a esta gran fuerza Spider-Man puede realizar saltos íncreibles. Un \"sentido arácnido\", que le permite saber si un peligro se cierne sobre él, antes de que suceda. En ocasiones este puede llevar a Spider-Man al origen del peligro.",
        img: "assets/img/spiderman.png",
        aparicion: "1962-08-01",
        casa: "Marvel"
      },
      {
        nombre: "Wolverine",
        bio: "En el universo ficticio de Marvel, Wolverine posee poderes regenerativos que pueden curar cualquier herida, por mortal que ésta sea, además ese mismo poder hace que sea inmune a cualquier enfermedad existente en la Tierra y algunas extraterrestres . Posee también una fuerza sobrehumana, que si bien no se compara con la de otros superhéroes como Hulk, sí sobrepasa la de cualquier humano.",
        img: "assets/img/wolverine.png",
        aparicion: "1974-11-01",
        casa: "Marvel"
      }
    ];
    return heroes;
  }

public getPaises(): Observable<any[]>{
  return this.http.get<any>(`https://restcountries.eu/rest/v2/lang/es`);
}

}
