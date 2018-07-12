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
  public error: boolean;
  public msgError: string;

  constructor(private _spotifiService: SpotifyService) {
    this.loading = true;
    this.error = false;
    this._spotifiService.getNewReleases().subscribe(
      (data: any) => {
        console.log(data);
        this.nuevasCanciones = data;
        this.loading = false;
      },
      (errorServicio) => {
        console.log(errorServicio);
        this.loading = false;
        this.msgError = errorServicio.error.error.message;
        this.error = true;
      }
    );
  }

  ngOnInit() {

  }

}
