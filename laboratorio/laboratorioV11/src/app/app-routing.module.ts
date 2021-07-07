import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildrenOutletContexts } from '@angular/router';
import { TypescriptComponent } from './aplications/typescript/typescript.component';
import { Aplicacion1Component } from './aplications/aplicacion1/aplicacion1.component';
import { HomeComponent } from './aplications/aplicacion2/components/home/home.component';
import { HeroesComponent } from './aplications/aplicacion2/components/heroes/heroes.component';
import { AboutComponent } from './aplications/aplicacion2/components/about/about.component';
import { HeroeComponent } from './aplications/aplicacion2/components/heroe/heroe.component';
import { BusquedaHeroesComponent } from './aplications/aplicacion2/components/busqueda-heroes/busqueda-heroes.component';
import { Aplication3Component } from './aplications/aplication3/aplication3.component';
import { Aplication4Component } from './aplications/aplication4/aplication4.component';
import { Aplication6Component } from './aplications/aplication6/aplication6.component';
import { UsuarioAplicacion6Component } from './aplications/aplication6/components/usuario-aplicacion6/usuario-aplicacion6.component';
import { NOMBRE_CLASE_PRINCIPAL_ROUTES } from './aplications/aplication6/components/usuario-aplicacion6/usuario.routes';
import { Aplication7Component } from './aplications/aplication7/aplication7.component';
import { AUTH_ROUTES } from './aplications/aplication7/components/auth.routes';
import { CallbackComponent } from './aplications/aplication7/components/callback/callback.component';
import { Aplication8Component } from './aplications/aplication8/aplication8.component';
import { FORMULARIOS_ROUTES } from './aplications/aplication8/formulario.routes';
import { Aplication9Component } from './aplications/aplication9/aplication9.component';
import { CRUD_ROUTES } from './aplications/aplication9/crud.routes';
import { Application10Component } from './aplications/application10/application10.component';
import { Application11Component } from './aplications/application11/application11.component';
import { PELICULAS_APP } from './aplications/application11/peliculas.routing';

const routes: Routes = [
  { path: 'tipescript', component: TypescriptComponent },
  { path: 'aplicacion1', component: Aplicacion1Component },
  { path: 'aplicacion2home', component: HomeComponent },
  { path: 'aplicacion2heroes', component: HeroesComponent },
  { path: 'aplicacion2about', component: AboutComponent },
  { path: 'aplicacion2heroe/:id', component: HeroeComponent },
  { path: 'aplicacion2busquedaHeroes/:termino', component: BusquedaHeroesComponent },
  { path: 'aplicacion3', component: Aplication3Component },
  { path: 'aplicacion4', component: Aplication4Component },
  { path: 'aplicacion6', component: Aplication6Component },
  {
    path: 'aplicacion7',
    component: Aplication7Component,
    children: AUTH_ROUTES
  },
  {
    path: 'aplicacion6usuario/:id',
    component: UsuarioAplicacion6Component,
    children: NOMBRE_CLASE_PRINCIPAL_ROUTES
  },
  {path: 'aplicacion8', component: Aplication8Component, children: FORMULARIOS_ROUTES},
  {path: 'aplicacion9', component: Aplication9Component, children: CRUD_ROUTES},
  {path: 'aplicacion10', component: Application10Component},
  {path: 'aplicacion11', component: Application11Component, children: PELICULAS_APP},
  {path: 'callback', component: CallbackComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'tipescript' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
