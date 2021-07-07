import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PeliculaComponent } from './pages/pelicula/pelicula.component';
import { BuscarComponent } from './pages/buscar/buscar.component';

export const PELICULAS_APP: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'pelicula/:id', component: PeliculaComponent},
  {path: 'buscar/:texto', component: BuscarComponent},
  {path: '**',pathMatch: 'full', redirectTo: 'home'}
];
