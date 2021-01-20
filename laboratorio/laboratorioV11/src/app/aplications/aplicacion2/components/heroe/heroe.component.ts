import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/models/heroe';
import { HeroesService } from '../../services/heroes.service';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent implements OnInit {

  public heroe: Heroe | undefined;

  constructor(private activatedRouter: ActivatedRoute, private heroesService: HeroesService) {
    this.activatedRouter.params.subscribe(params => {
      this.heroe = heroesService.getHeroe(params.id);
    });
  }

  ngOnInit(): void {
  }

  public volver(): void {
    window.history.back();
  }

}
