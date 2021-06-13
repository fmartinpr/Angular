import { Routes } from '@angular/router';
import { HeroeComponent } from '../aplicacion2/components/heroe/heroe.component';
import { HeroeCrudComponent } from './pages/heroe/heroe.component';
import { HeroesCrudComponent } from './pages/heroes/heroes.component';
export const CRUD_ROUTES: Routes = [
    { path: 'heroes', component: HeroesCrudComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'heroes'}
];
