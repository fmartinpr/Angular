import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  constructor(private _activatedRoute:ActivatedRoute,
              public _sportify:SpotifyService) { }

  ngOnInit() {
    /*this._activatedRoute.params
      .map(params=>params['id'])
      .subscribe(id=>{
        console.log(id);
    });*/
  }

}
