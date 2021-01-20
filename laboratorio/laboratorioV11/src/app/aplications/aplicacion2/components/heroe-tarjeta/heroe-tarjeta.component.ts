import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Heroe } from 'src/app/models/heroe';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html'
})
export class HeroeTarjetaComponent implements OnInit {
  @Input() heroe: Heroe | undefined;
  @Output() heroeSeleccionado: EventEmitter<string>;
  constructor(private router: Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {

  }

  public verHeroe(nombre: string): void {
    this.heroeSeleccionado.emit(nombre);
  }

}
