import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-navbar-sportiapp',
  templateUrl: './navbar-sportiapp.component.html',
  styles: [
  ]
})
export class NavbarSportiappComponent implements OnInit {
  @Output() vistaSeleccionada: EventEmitter<string>;

  constructor() { 
    this.vistaSeleccionada = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public setVista(vista: string): void{
    this.vistaSeleccionada.emit(vista);
  }

}
