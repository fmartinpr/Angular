import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarAppHeroesComponent } from './navbar/navbar-app-heroes.component';
import { RouterModule } from '@angular/router';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [NavbarAppHeroesComponent, SlideshowComponent],
  exports: [
    NavbarAppHeroesComponent,
    SlideshowComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SwiperModule
  ]
})
export class ComponentsModule { }
