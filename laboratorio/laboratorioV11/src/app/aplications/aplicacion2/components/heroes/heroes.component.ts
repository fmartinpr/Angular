import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../../../models/heroe';
import { Router } from '@angular/router';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  public heroes: Heroe[] = [];

  constructor(
    private router: Router,
    private heroesService: HeroesService) {
  }

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
  }

  public verHeroe(nombre: string): void {
    this.router.navigate(['aplicacion2heroe', nombre]);
  }

}
