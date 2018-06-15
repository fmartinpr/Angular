import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  map } from 'rxjs/operators';

const token = 'BQCl2VK1iznWAwfWpiLx1Z-1E7r5_stWC-rAUjbyEVSTE2226sp4Q362FHP9Qe6MDvAxv_glvU0E8mCM_co';
@Injectable()
export class SpotifyService {
  client_id = "66cfa36061f04c3bbbb798ae6fd1dc26";
  client_secret = "7f5e080bd2094124891cae46bafe0641";

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

  getQuery(query:string){
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization':'Bearer ' + token
    });

    return this._HttpClient.get(url,{headers:headers});
  }

  getNewReleases(){
      return this.getQuery('browse/new-releases?limit=20').pipe(
        map(data => data['albums'].items)
      );
  }

  getArtistas(termino:string){
    return this.getQuery(`search?query=${termino}&type=artist&limit=20`).pipe(
      map(data =>
      data['artists'].items)
    );
  }

}
