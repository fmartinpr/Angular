import { Component, OnInit } from '@angular/core';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ng-style',
  template: `
<p [ngStyle]="{'font-size': tamanio + 'px'}">
  Hola mundo... esta es una etiqueta.
</p>
<p [style.fontSize.%]="tamanio">
  Hola mundo2... esta es una etiqueta2.
</p>
<button class="btn btn-primary" (click)="tamanio = tamanio + 5">
  <fa-icon [icon]="faPlus"></fa-icon>
</button>

<button class="btn btn-primary" (click)="tamanio = tamanio - 5">
  <fa-icon [icon]="faMinus"></fa-icon>
</button>
  `,
  styles: [
  ]
})
export class NgStyleComponent implements OnInit {
  public tamanio: number;
  public faPlus = faPlus;
  public faMinus = faMinus;
  constructor() {
    this.tamanio = 20;
  }

  ngOnInit(): void {
  }

}
