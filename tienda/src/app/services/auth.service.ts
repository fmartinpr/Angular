import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUsuario } from '../models/login-usuario';
import { Observable} from 'rxjs';
import { map} from 'rxjs/operators';
import { JwtModel } from '../models/jwt-model';
import { NuevoUsuario } from '../models/nuevo-usuario';

const cabecera = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authURL = 'http://localhost:8080/api/auth/';

  constructor(private httpClient: HttpClient) { }

  public login(usuario: LoginUsuario): Observable<JwtModel> {
    return this.httpClient.post<JwtModel>(this.authURL + 'login', usuario, cabecera);
  }

  public registro(usuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', usuario, cabecera);
  }

  public hasAccess(expectedRol: String[]): Observable<boolean> {
    return this.httpClient.get<any>(this.authURL + 'authorities', cabecera).pipe(map((data:any[]) => {
      data.forEach(a => {
        if(expectedRol.includes(a.authority)){
          console.log(true);
          return true;
        }
      })
      console.log(false);
      return false;
    }));
  }

}
