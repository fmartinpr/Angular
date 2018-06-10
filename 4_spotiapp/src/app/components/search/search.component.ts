import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent{
  constructor(public _spotify: SpotifyService) {

  }

  buscarArtista(termino:string){
    //this._spotify.getToken();
    if(termino && termino.length > 0){
      console.log(termino);
      this._spotify.getArtistas(termino).subscribe(artistas =>{
        //console.log('La respuesta ya esta lista!');
        //console.log(artistas);
      });
    }
  }

}
