import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  public nuevasCanciones: any[] = [];
  public loading: boolean;

  constructor(private _spotifiService: SpotifyService) {
    this.loading = true;
    this._spotifiService.getNewReleases().subscribe(
      (data: any) => {
        console.log(data);
        this.nuevasCanciones = data;
        this.loading = false;
      }
    );
  }

  ngOnInit() {

  }

}
