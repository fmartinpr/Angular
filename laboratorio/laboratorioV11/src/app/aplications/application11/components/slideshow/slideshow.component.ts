import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../interfaces/cartelera-response';
// import Swiper core and required modules
import SwiperCore from 'swiper/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['../../application11.component.css']
})
export class SlideshowComponent implements OnInit {

  @Input() movies: Movie[];

  constructor() { 
    this.movies = [];
  }

  ngOnInit(): void {
    console.log(this.movies);
  }

  onSwiper(swiper: string) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
