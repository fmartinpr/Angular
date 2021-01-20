import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
import { UsuarioNuevoAplicacion6Component } from './aplications/aplication6/components/usuario-aplicacion6/usuario-nuevo-aplicacion6.component';
import { UsuarioEditarAplicacion6Component } from './aplications/aplication6/components/usuario-aplicacion6/usuario-editar-aplicacion6.component';
import { UsuarioDetalleAplicacion6Component } from './aplications/aplication6/components/usuario-aplicacion6/usuario-detalle-aplicacion6.component';

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
    path: 'aplicacion6usuario/:id',
    component: UsuarioAplicacion6Component,
    children: [
      { path: 'nuevo', component: UsuarioNuevoAplicacion6Component },
      { path: 'editar', component: UsuarioEditarAplicacion6Component },
      { path: 'detalle', component: UsuarioDetalleAplicacion6Component },
      { path: '**', pathMatch: 'full', redirectTo: 'nuevo' }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'tipescript' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
