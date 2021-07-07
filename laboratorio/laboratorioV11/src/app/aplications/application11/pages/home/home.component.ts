import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../services/peliculas.service';
import { Movie } from '../../interfaces/cartelera-response';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../../application11.component.css']
})
export class HomeComponent implements OnInit {
  
  public movies: Movie[];
  constructor(private peliculasService: PeliculasService) { 
    this.movies = [];
  }
  
  ngOnInit(): void {
    this.peliculasService.getCartelera().subscribe(
      data => {
        //console.log(data)
        this.movies = data.results;
      }
    );
  }

}
