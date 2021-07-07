import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './aplications/aplication7/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'laboratorioV11';
  public isViewNavbarHeroes = false;

  constructor(private router: Router, private auth: AuthService) {

  }
  ngOnInit(): void {
    this.auth.localAuthSetup();
  }

  public viewTipeScript(): void {
    this.isViewNavbarHeroes = false;
    this.router.navigate(['typescript']);
  }
  public viewAplicacion1(): void {
    this.isViewNavbarHeroes = false;
    this.router.navigate(['aplicacion1']);
  }
  public viewAplicacion2(): void {
    this.isViewNavbarHeroes = true;
    this.router.navigate(['aplicacion2home']);
  }
  public viewAplicacion3(): void {
    this.isViewNavbarHeroes = false;
    this.router.navigate(['aplicacion3']);
  }
  public viewAplicacion4(): void {
    this.isViewNavbarHeroes = false;
    this.router.navigate(['aplicacion4']);
  }
  public viewAplicacion6(): void {
    this.isViewNavbarHeroes = false;
    this.router.navigate(['aplicacion6']);
  }
  public viewAplication7(): void {
    this.isViewNavbarHeroes = false;
    this.router.navigate(['aplicacion7']);
  }
  public viewAplication8(): void {
    this.isViewNavbarHeroes = false;
    this.router.navigate(['aplicacion8']);
  }

  public viewAplication9(): void{
    this.isViewNavbarHeroes = false;
    this.router.navigate(['aplicacion9']);
  }

  public viewAplication10(): void{
    this.isViewNavbarHeroes = false;
    this.router.navigate(['aplicacion10']);
  }

  public viewAplication11(): void{
    this.isViewNavbarHeroes = false;
    this.router.navigate(['aplicacion11']);
  }
}
