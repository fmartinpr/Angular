import { TemplateComponent } from './pages/template/template.component';
import { ReactiveComponent } from './pages/reactive/reactive.component';
import { Routes } from '@angular/router';

export const FORMULARIOS_ROUTES: Routes = [
    { path: 'page-template', component: TemplateComponent },
    { path: 'page-reactive', component: ReactiveComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'page-template'}
];