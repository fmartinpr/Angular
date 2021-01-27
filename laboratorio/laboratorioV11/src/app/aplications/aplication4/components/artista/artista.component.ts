import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['../../aplication4.component.css']
})
export class ArtistaComponent implements OnInit,  OnChanges {
  @Input() artistaId: string;
  public artist: any;
  public loading: boolean;
  public topTracks: any[];
  @Output() vistaSeleccionada: EventEmitter<string>;
  private doSomething(input: string) {
    console.log(input);
  }
 
  constructor(private spotifyService: SpotifyService) {
    this.artistaId = '';
    this.loading = true;
    this.topTracks = [];
    this.vistaSeleccionada = new EventEmitter();
  }
  ngOnChanges(changes: SimpleChanges): void {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        console.log('ngOnChanges ' + propName);
        switch (propName) {
          case 'artistaId': {
            this.doSomething(this.artistaId);
            this.artistaId = '0';
          }
        }
      }
    }
    console.log('ngOnChanges ' + changes.currentValue);
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
