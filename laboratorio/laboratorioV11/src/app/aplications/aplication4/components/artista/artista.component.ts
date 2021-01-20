import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['../../aplication4.component.css']
})
export class ArtistaComponent implements OnInit {
  @Input() artistaId: string;
  public artist: any;
  public loading: boolean;
  public topTracks: any[];
  @Output() vistaSeleccionada: EventEmitter<string>;
 
  constructor(private spotifyService: SpotifyService) {
    this.artistaId = '';
    this.loading = true;
    this.topTracks = [];
    this.vistaSeleccionada = new EventEmitter();
  }

  ngOnInit(): void {
    this.spotifyService.getArtista(this.artistaId).subscribe(
      data => {
        this.artist = data;
        this.getTopTracks(this.artistaId);
        this.loading = false;
      }
    );
  }

  public setVista(): void{
    this.vistaSeleccionada.emit('search');
  }

  public getTopTracks(id: string): void{
    this.spotifyService.getTopTracks(id).subscribe(
      data => {
        this.topTracks = data;
        console.log(this.topTracks);
      }
    );
  }

}
