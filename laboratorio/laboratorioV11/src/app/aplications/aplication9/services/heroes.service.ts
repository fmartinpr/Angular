import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HeroeModel } from '../../../models/heroe-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  
  public url: string;

  constructor(private http: HttpClient) {
    this.url = "http://localhost:8080/api/heroes";
  }

  public crearHeroe(heroe: HeroeModel): Observable<HeroeModel>{
    return this.http.post<HeroeModel>(`${this.url}/nuevo`,heroe);
  }

  public actualizarHeroe(heroe: HeroeModel): Observable<HeroeModel>{
    return this.http.put<HeroeModel>(`${this.url}/modificar/${heroe.id}`, heroe);
  }

  public eliminarHeroe(id: string): Observable<Boolean>{
    return this.http.delete<Boolean>(`${this.url}/delete/${id}/`);
  }

  public getHeroes(): Observable<HeroeModel[]>{
    return this.http.get<HeroeModel[]>(`${this.url}/all`);
  }

  public getHeroe(id: string): Observable<HeroeModel>{
    return this.http.get<HeroeModel>(`${this.url}/one/${id}`);
  }


}
