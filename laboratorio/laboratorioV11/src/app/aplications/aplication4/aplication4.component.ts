import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aplication4',
  templateUrl: './aplication4.component.html',
  styleUrls: ['./aplication4.component.css']
})
export class Aplication4Component implements OnInit {
  public vista: string;
  public artistaId: string;

  constructor() {
    this.vista = 'home';
    this.artistaId = '';
  }

  ngOnInit(): void {
  }

  public setVista(vista: string): void{
    this.vista = vista;
  }

  public setArtistaId(artistaId: string): void{
    this.artistaId = artistaId;
  }

}
