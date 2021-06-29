import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router } from '@angular/router';
import { TokenService } from '../services/token.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { Rol } from '../models/Rol';

@Injectable({
  providedIn: 'root'
})

export class GuardService implements CanActivate {

  realRol: string;

  /*canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRol = route.data.expectedRol;
    const roles = this.tokenService.getAuthorities();
    this.realRol = 'user';
    roles.forEach(rol => {
      if (rol === 'ROLE_ADMIN') {
        this.realRol = 'admin';
      }
    });
    if (!this.tokenService.getToken() || expectedRol.indexOf(this.realRol) === -1) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }*/

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    const expectedRol: any[] = route.data.expectedRol;
    let isAccess = false;
    return this.auth.getAllRol().pipe(map((data:Rol[]) => {
      let isAccess = false;
      data.forEach((a:Rol) => {
        if (expectedRol.includes(a.authority)) {
          console.log(true);
          isAccess = true;
        }
      })
      
      if (!isAccess){
        this.tokenService.logOut();
        this.router.navigate(['/login']);
      } 
      return isAccess;
    }));
  }

  constructor(private tokenService: TokenService, private auth: AuthService, private router: Router) { }
}

