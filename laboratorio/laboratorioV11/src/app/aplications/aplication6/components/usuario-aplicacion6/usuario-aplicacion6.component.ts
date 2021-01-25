import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuario-aplicacion6',
  templateUrl: './usuario-aplicacion6.component.html',
  styles: [
  ]
})
export class UsuarioAplicacion6Component implements OnInit {

  constructor(private router: ActivatedRoute) { 
    this.router.params.subscribe(p => {
      console.log('Ruta padre');
      console.log(p.id);
    });
  }

  ngOnInit(): void {
  }

}
