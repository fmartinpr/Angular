import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarAppHeroesComponent } from './navbar/navbar-app-heroes.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SwiperModule } from 'swiper/angular';
import { PeliculasPosterGridComponent } from './peliculas-poster-grid/peliculas-poster-grid.component';

@NgModule({
  declarations: [NavbarAppHeroesComponent, SlideshowComponent, PeliculasPosterGridComponent],
  exports: [
    NavbarAppHeroesComponent,
    SlideshowComponent,
    PeliculasPosterGridComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule
  ]
})
export class ComponentsModule { }
