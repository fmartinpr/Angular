import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  heroe:any = {};

  constructor(private _activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService)
  {
    this._activatedRoute.params.subscribe( params =>{
      this.heroe = _heroesService.getHeroe(params['id']);
    });
  }

}