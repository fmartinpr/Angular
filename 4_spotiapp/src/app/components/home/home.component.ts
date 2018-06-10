import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  public nuevasCanciones:any[] = [];
  constructor(private _spotifiService: SpotifyService) {
    this._spotifiService.getNewReleases().subscribe(
      (data:any) => {
        console.log(data.albums.items);
        this.nuevasCanciones = data;
      }
    );
  }

  ngOnInit() {

  }

}
