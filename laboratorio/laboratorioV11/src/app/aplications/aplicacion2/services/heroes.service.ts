import { Injectable } from '@angular/core';
import { DatosDemoService } from '../../../services/datos-demo.service';
import { Heroe } from '../../../models/heroe';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private heroes: Heroe[];

  constructor(datosService: DatosDemoService) {
    this.heroes = datosService.getHeroes();
  }

  public getHeroes(): Heroe[] {
    return this.heroes;
  }

  public getHeroe(nombre: string): Heroe {
    let heroe = this.heroes.find(h => h.nombre === nombre);
    if (heroe === undefined) {
      heroe = { nombre: 'No existe', bio: '', img: '', aparicion: '', casa: '' };
    }
    return heroe;
  }

  public buscarHeroes(termino: string): Heroe[] {
    let listHeroe: Heroe[];
    termino = termino.toLowerCase();
    listHeroe = this.heroes.filter(h => h.nombre.toLocaleLowerCase().includes(termino));

    return listHeroe === undefined ? [] : listHeroe;
  }

}
