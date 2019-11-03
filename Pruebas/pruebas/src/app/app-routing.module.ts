import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrdenarMapaComponent } from './ordernaMapa/ordenar-mapa.component';


const routes: Routes = [
  {path: 'sortMapa', component: OrdenarMapaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
