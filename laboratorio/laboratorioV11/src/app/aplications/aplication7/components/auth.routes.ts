import { Routes } from '@angular/router';
import { ProtegidaAuth0Component } from './protegida-auth0/protegida-auth0.component';
import { PreciosAuth0Component } from './precios-auth0/precios-auth0.component';
import { HomeAuth0Component } from './home-auth0/home-auth0.component';

export const  AUTH_ROUTES: Routes = [
    { path: 'homeAuth0', component: HomeAuth0Component },
    { path: 'preciosAuth0', component: PreciosAuth0Component },
    { path: 'protegidaAuth0', component: ProtegidaAuth0Component },
    { path: '**', pathMatch: 'full', redirectTo: 'homeAuth0' }
];
