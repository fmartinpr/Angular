import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})

export class ArtistComponent {

  artista: any = {};
  topTracks: any[] = [];
  loading: boolean;

  constructor(private router: ActivatedRoute, private _spotifyService: SpotifyService) {
    this.loading = true;
    this.router.params.subscribe(params => {
      this.getArtista(params['id']);
      this.getTopTracks(params['id']);
    });
  }

  private getArtista(id: string) {
    this._spotifyService.getArtista(id).subscribe(
      artista => {
        this.artista = artista;
      }
    );
  }

  private getTopTracks(id: string) {
    this._spotifyService.getTopTracks(id).subscribe(
      topTracks => {
        this.topTracks = topTracks;
        this.loading = false;
      }
    );
  }

}
