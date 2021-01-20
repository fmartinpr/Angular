import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home-sportiapp',
  templateUrl: './home-sportiapp.component.html',
  styleUrls: ['../../aplication4.component.css']
})
export class HomeSportiappComponent implements OnInit {
  public albumes: any[];
  public loading: boolean;
  @Output() vistaSeleccionada: EventEmitter<string>;
  @Output() artistaIdSeleccionado: EventEmitter<string>;
  public error: boolean;
  public mensajeError: string;

  constructor(private spotifyService: SpotifyService) {
    this.vistaSeleccionada = new EventEmitter();
    this.artistaIdSeleccionado = new EventEmitter();
    this.albumes = [];
    this.loading = true;
    this.error = false;
    this.mensajeError = '';
  }

  ngOnInit(): void {
this.spotifyService.getNewReleases().subscribe(
  (data: any) => {
    this.albumes = data;
    this.loading = false;
  },
  errorServicio => {
    this.error = true;
    this.loading = false;
    this.mensajeError = errorServicio.error.error.message;
  }
);
  }

  public setVista(vista: string): void {
    this.vistaSeleccionada.emit(vista);
  }

  public setArtistaId(artistaId: string): void {
    this.artistaIdSeleccionado.emit(artistaId);
  }

}
