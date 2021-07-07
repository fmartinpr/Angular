import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar-app-heroes',
  templateUrl: './navbar-app-heroes.component.html',
  styleUrls: ['../../application11.component.css']
})
export class NavbarAppHeroesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public buscarPelicula(texto: string): void{
    console.log(texto);
  }

}
