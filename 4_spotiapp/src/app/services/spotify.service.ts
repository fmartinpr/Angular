import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  map } from 'rxjs/operators';

@Injectable()
export class SpotifyService {
  client_id = "66cfa36061f04c3bbbb798ae6fd1dc26";
  client_secret = "7f5e080bd2094124891cae46bafe0641";

  artistas:any[] = [];

  constructor(public _HttpClient:HttpClient) {
    console.log('Servicio spotify listo');
  }

  /*getToken(){
    let url = 'https://accounts.spotify.com/api/token';

    let headers = new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded",
    "Cache-Control": "no-cache",
    "Postman-Token": "79ecdfbf-9714-4c1f-b288-4b9e10a0ba59"
    });

    let body = {
      "grant_type": "client_credentials",
      "client_id": "66cfa36061f04c3bbbb798ae6fd1dc26",
      "client_secret": "7f5e080bd2094124891cae46bafe0641"
    };

    this._HttpClient.post('https://accounts.spotify.com/api/token', body,
    {headers:headers}).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        });
  }*/

  private headers = new HttpHeaders({
    'Authorization':'Bearer BQAHv1RLfS1qcL1QDJr9INWOZCgd7BMhQF-miKemfKLT5GQ_vHBiRaF0yNK3Tg-5SvZaftonkOwSWhLaMiE'
  });

  getNewReleases(){
    let url = 'https://api.spotify.com/v1/browse/new-releases?limit=20';
    return this._HttpClient.get(url,{headers:this.headers}).pipe(map(data => {
      return data['albums'].items;
    }));
  }

  getArtistas(termino:string){
    let url='https://api.spotify.com/v1/search?query='+termino+'&type=artist&limit=20';

    return this._HttpClient.get(url,{headers:this.headers}).pipe(map(data => {
      return data['artists'].items;
    }));
  }

}
