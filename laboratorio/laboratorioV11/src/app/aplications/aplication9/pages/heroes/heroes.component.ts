import { Component, OnInit } from '@angular/core';
import { faPlus, faSyncAlt, faExclamation, faPen, faTrash, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { HeroesService } from '../../services/heroes.service';
import { HeroeModel } from '../../../../models/heroe-model';
import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesCrudComponent implements OnInit {
  public faPlus: IconDefinition;
  public faSyncAlt: IconDefinition;
  public faExclamation: IconDefinition;
  public faPen: IconDefinition;
  public faTrash = faTrash;

  public heroes: HeroeModel[];
  public isCargando: boolean;

  constructor(private heroeService: HeroesService) {
    this.faPlus = faPlus;
    this.faSyncAlt = faSyncAlt;
    this.faExclamation = faExclamation;
    this.faPen = faPen;
    this.faTrash = faTrash;
    this.heroes = [];
    this.isCargando = false;
  }

  ngOnInit(): void {
    this.isCargando = true;
    this.heroeService.getHeroes().subscribe(
      resp => {
        this.isCargando = false;
        this.heroes = resp
      },
      error => {
        this.isCargando = false;
        console.error(error);
      }
    );
  }

  public borrarHeroe(heroe: HeroeModel): void {
    Swal.fire({
      title: '¿Está seguro?',
      text: `Está seguro que desea borrar ${heroe.nombre}`,
      icon: 'question',
      showConfirmButton: true,
      showCancelButton: true
    }).then(resp => {
      if (resp.value) this.okBorrarHeroe(heroe);
    });
  }

  private okBorrarHeroe(heroe: HeroeModel): void {
    this.heroeService.eliminarHeroe(heroe.id).subscribe(
      resp => {
        if (resp) {
          const start = this.heroes.indexOf(heroe);
          this.heroes.splice(start, 1);
        }
      },
      (error: HttpErrorResponse) => {
        console.error(`Error eliminar: ${error.error.message}`)
        console.error(error);
      });
  }

}
