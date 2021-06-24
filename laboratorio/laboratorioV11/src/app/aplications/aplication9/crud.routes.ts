import { Routes } from '@angular/router';
import { HeroesCrudComponent } from './pages/heroes/heroes.component';
import { HeroeCrudComponent } from './pages/heroe/heroe.component';
export const CRUD_ROUTES: Routes = [
    { path: 'heroes', component: HeroesCrudComponent },
    { path: 'heroe/:id', component: HeroeCrudComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'heroes'}
];
