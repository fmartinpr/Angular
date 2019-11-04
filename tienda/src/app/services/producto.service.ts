import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';

const cabecera = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private url = 'http://localhost:8080/api/productos/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Producto[]> {
    return this.httpClient.get<Producto[]>(this.url + 'lista', cabecera);
  }

  public detalle(id: number): Observable<Producto> {
    return this.httpClient.get<Producto>(this.url + `detalle/${id}`, cabecera);
  }

  public crear(producto: Producto): Observable<Producto> {
    return this.httpClient.post<Producto>(this.url + 'nuevo', producto, cabecera);
  }

  public editar(producto: Producto): Observable<Producto> {
    return this.httpClient.put<Producto>(this.url + 'actualizar', producto, cabecera);
  }

  public borrar(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.url + `borrar/${id}`, cabecera);
  }
}
