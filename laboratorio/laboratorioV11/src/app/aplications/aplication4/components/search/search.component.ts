import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['../../aplication4.component.css']
})
export class SearchComponent implements OnInit {
  public artists: any[];
  public loading: boolean;
  @Output() vistaSeleccionada: EventEmitter<string>;
  @Output() artistaIdSeleccionado: EventEmitter<string>;

  constructor(private spotifyService: SpotifyService) {
    this.artists = [];
    this.loading = false;
    this.vistaSeleccionada = new EventEmitter();
    this.artistaIdSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

  public buscar(termino: string): void {
    if (termino.length > 0) {
      this.loading = true;
      this.spotifyService.getArtistas(termino).subscribe(data => {
        this.artists = data;
        this.loading = false;
      });
    }else{
      this.artists = [];
    }
  }

  public setVista(vista: string): void{
    this.vistaSeleccionada.emit(vista);
  }

  public setArtistaId(artistaId: string): void{
    this.artistaIdSeleccionado.emit(artistaId);
  }

}
