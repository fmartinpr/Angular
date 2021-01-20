import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {
  public isViewNavbarHeroes = true;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public buscarHeroe(termino: string): void {
    this.router.navigate(['/aplicacion2busquedaHeroes', termino]);
  }

}
