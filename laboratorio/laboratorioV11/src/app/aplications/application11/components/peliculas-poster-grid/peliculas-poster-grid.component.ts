import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['../../application11.component.css','./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit {
  
  @Input() movies: Movie[];

  constructor() { 
    this.movies = [];
  }

  ngOnInit(): void {
  }

}
