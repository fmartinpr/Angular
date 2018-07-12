import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent {
  public artistas: any[] = [];
  public loading: boolean;
  public error: boolean;
  public msgError: string;

  constructor(public _spotify: SpotifyService) {

  }

  private buscarArtista(termino: string) {
    // this._spotify.getToken();
    if (termino && termino.length > 0) {
      this.loading = true;
      console.log(termino);
      this._spotify.getArtistas(termino).subscribe(artistas => {
        this.artistas = artistas;
        this.loading = false;
      },
      (errorServicio) => {
        console.log(errorServicio);
        this.loading = false;
        this.msgError = errorServicio.error.error.message;
        this.error = true;
      });
    } else {
      this.artistas = [];
    }
  }

}
