import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Pais } from '../../../models/pais';



@Injectable({
  providedIn: 'root'
})
export class PaisService {

  constructor(private http: HttpClient) {
  }

  public getPaises(){
    return this.http.get<Pais[]>('https://restcountries.eu/rest/v2/lang/es').pipe(
      map(resp => resp.map(pais => ({nombre: pais.name, codigo: pais.alpha3Code}))
      )
    )
  }

}
