import { IMovies } from 'src/app/core/interfaces/i-movies';
import { Component, OnInit } from '@angular/core';
import { MovieAPIService } from 'src/app/core/services/movie-api.service';

@Component({
  selector: 'app-top-movies',
  templateUrl: './top-movies.component.html',
  styleUrls: ['./top-movies.component.css'],
})
export class TopMoviesComponent implements OnInit {
  constructor(private _MovieAPIService: MovieAPIService) {}
  topMovie: IMovies[] = [];
  imagePath: string = `https://image.tmdb.org/t/p/w500/`;

  ngOnInit(): void {
    this._MovieAPIService.getTopMovies().subscribe({
      next: (response) => {
        console.log(response.results);
        this.topMovie = response.results;
      },
    });
  }
}
