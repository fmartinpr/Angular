import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/models/heroe';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-busqueda-heroes',
  templateUrl: './busqueda-heroes.component.html'
})
export class BusquedaHeroesComponent implements OnInit {
  public heroes: Heroe[];
  public termino: string;
  constructor(private router: Router, private heroesService: HeroesService, private activateRouter: ActivatedRoute) {
    this.heroes = [];
    this.termino = '';
  }

  ngOnInit(): void {
    this.activateRouter.params.subscribe(
      params => {
        this.termino = params.termino;
        this.heroes = this.heroesService.buscarHeroes(this.termino);
      }
    );
  }

  public verHeroe(nombre: string): void {
    this.router.navigate(['aplicacion2heroe', nombre]);
  }

}
