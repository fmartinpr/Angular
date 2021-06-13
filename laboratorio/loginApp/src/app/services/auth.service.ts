import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsuarioModel } from '../models/usuario.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'https://identitytoolkit.googleapis.com/v1/accounts:';
  private APIKEY = 'AIzaSyBD_S_CG6qgp9SOHQtTrJQG8KNtxkhntsM';
  private userToken: string;

  constructor(private http: HttpClient) {
    this.leerToken();
  }

  //Crear usuario
  //https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=[API_KEY]

  //Login
  //https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]

  public logout() {
    localStorage.removeItem('token');
  }

  public login(usuario: UsuarioModel) {
    const authData = {
      ...usuario,
      returnSecureToken: true
    }

    return this.http.post(
      `${this.URL}signInWithPassword?key=${this.APIKEY}`, authData
    ).pipe(
      map(resp => {
        this.guardarToken(resp['idToken'], resp['expiresIn']);
        return resp;
      })
    );
  }

  public nuevoUsuario(usuario: UsuarioModel) {
    /*const authData = {
      email: usuario.password,
      password: usuario.password,
      returnSecureToken: true
    }*/

    const authData = {
      ...usuario, //Equivale a mandar email, password, nombre aunque este no se use
      returnSecureToken: true
    }

    return this.http.post(
      `${this.URL}signUp?key=${this.APIKEY}`, authData
    ).pipe(
      map(resp => {
        console.log(resp);
        this.guardarToken(resp['idToken'], resp['expiresIn']);
        return resp;
      })
    );
  }

  private guardarToken(idToken: string, expiresIn: number) {
    this.userToken = idToken;
    localStorage.setItem('token', idToken);

    const dateActual = new Date();
    dateActual.setSeconds(expiresIn);
    localStorage.setItem('expira', dateActual.toString());

  }

  private leerToken() {
    if (localStorage.getItem('token')) {
      this.userToken = localStorage.getItem('token');
    } else {
      this.userToken = '';
    }
  }

  public isAuthenticated(): boolean {
    return this.userToken.length > 2;
  }


}


