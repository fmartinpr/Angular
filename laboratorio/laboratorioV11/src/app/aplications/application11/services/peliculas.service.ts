import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CarteleraResponse } from '../interfaces/cartelera-response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private http: HttpClient) { }
  
  public getCartelera(): Observable<CarteleraResponse> {
    return this.http.get<CarteleraResponse>('https://api.themoviedb.org/3/movie/now_playing?api_key=953ada762b7e775870aab260fa633985&language=es-ES&page=1');
  }

}
