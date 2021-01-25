import { Routes } from '@angular/router';
import { UsuarioEditarAplicacion6Component } from './usuario-editar-aplicacion6.component';
import { UsuarioNuevoAplicacion6Component } from './usuario-nuevo-aplicacion6.component';
import { UsuarioDetalleAplicacion6Component } from './usuario-detalle-aplicacion6.component';

export const NOMBRE_CLASE_PRINCIPAL_ROUTES: Routes = [
    { path: 'nuevo', component: UsuarioNuevoAplicacion6Component },
    { path: 'editar', component: UsuarioEditarAplicacion6Component },
    { path: 'detalle', component: UsuarioDetalleAplicacion6Component },
    { path: '**', pathMatch: 'full', redirectTo: 'nuevo' }
];
