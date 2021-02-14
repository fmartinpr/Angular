import { Routes, CanActivate } from '@angular/router';
import { ProtegidaAuth0Component } from './protegida-auth0/protegida-auth0.component';
import { PreciosAuth0Component } from './precios-auth0/precios-auth0.component';
import { HomeAuth0Component } from './home-auth0/home-auth0.component';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../services/auth.guard';

export const AUTH_ROUTES: Routes = [
    { path: 'homeAuth0', component: HomeAuth0Component },
    { path: 'preciosAuth0', component: PreciosAuth0Component },
    {
        path: 'protegidaAuth0',
        component: ProtegidaAuth0Component,
        canActivate: [AuthGuard]
    },
    { path: '**', pathMatch: 'full', redirectTo: 'homeAuth0' }
];
