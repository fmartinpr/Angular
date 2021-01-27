import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-usuario-nuevo-aplicacion6',
  templateUrl: './usuario-nuevo-aplicacion6.component.html',
  styles: [
  ]
})
export class UsuarioNuevoAplicacion6Component implements OnInit {

  constructor(private router: ActivatedRoute) { 
    this.router.parent?.params.subscribe(p => {
      console.log('Ruta hija usuario nuevo');
      console.log(p);
    });
  }

  ngOnInit(): void {
    
  }

}
