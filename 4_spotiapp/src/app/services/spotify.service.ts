import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artistas:any[] = [];

  constructor(public _HttpClient:HttpClient) {
    console.log('Servicio spotify listo');
  }

  getArtistas(termino:string){
    let url='https://api.spotify.com/v1/search?query='+termino+'&type=artist&limit=20';
    let headers = new HttpHeaders({
      'Authorization':'Bearer BQBc65zunf9KzByXXdhCtyIxCzS9bV7DYKmY0FoZwXbHqwdEzEyLQLXx01glalp5G9cIppvNTGPXTLYP51o'
    });

    return this._HttpClient.get(url,{headers:headers}).map((resp:any) => {
      //console.log(resp);
      this.artistas = resp.artists.items;
      return this.artistas;
    });
  }

}
