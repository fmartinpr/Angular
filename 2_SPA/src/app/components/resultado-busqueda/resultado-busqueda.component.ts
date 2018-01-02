import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService, Heroe } from '../../servicios/heroes.service'

@Component({
  selector: 'app-resultado-busqueda',
  templateUrl: './resultado-busqueda.component.html'
})
export class ResultadoBusquedaComponent implements OnInit {
  heroes:Heroe[]=[];
  termino:string;
  constructor(private _activatedRoute:ActivatedRoute,
    private _heroesService:HeroesService,
    private _router:Router) { }

  ngOnInit() {
      this._activatedRoute.params.subscribe(parans=>{
        this.termino = parans['termino'];
        this.heroes = this._heroesService.buscarHeroes(this.termino);
      });
  }

  verHeroe(idx:number){
    this._router.navigate(['/heroe',idx]);
  }

}
