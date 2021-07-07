import { Component, OnInit, Input, AfterContentInit, AfterViewInit } from '@angular/core';
import { Movie } from '../../interfaces/cartelera-response';
import { Swiper } from 'swiper';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['../../application11.component.css', './slideshow.component.css']
})
export class SlideshowComponent implements OnInit, AfterViewInit{

  @Input() movies: Movie[];
  private swiper?: Swiper;

  constructor() { 
    this.movies = [];
  }

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
    this.swiper = new Swiper('.swiper-container', {
      loop: true
    });

    setInterval(
      () => this.swiper?.slideNext(1000),
      10000
    );
    
  }

  public onSlideNext(): void{
    this.swiper?.slideNext(1000);
  }

  public onSlidePrev(): void{
    this.swiper?.slidePrev(1000);
  }

}
