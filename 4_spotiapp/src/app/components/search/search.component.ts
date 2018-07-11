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

  constructor(public _spotify: SpotifyService) {

  }

  buscarArtista(termino: string) {
    // this._spotify.getToken();
    if (termino && termino.length > 0) {
      this.loading = true;
      console.log(termino);
      this._spotify.getArtistas(termino).subscribe(artistas => {
        this.artistas = artistas;
        this.loading = false;
      });
    } else {
      this.artistas = [];
    }
  }

}
