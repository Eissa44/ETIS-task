import { IMovies } from 'src/app/core/interfaces/i-movies';
import { Component, OnInit } from '@angular/core';
import { MovieAPIService } from 'src/app/core/services/movie-api.service';

@Component({
  selector: 'app-upcomig-movies',
  templateUrl: './upcomig-movies.component.html',
  styleUrls: ['./upcomig-movies.component.css'],
})
export class UpcomigMoviesComponent implements OnInit {
  constructor(private _MovieAPIService: MovieAPIService) {}
  upComing: IMovies[] = [];
  imagePath: string = `https://image.tmdb.org/t/p/w500/`;

  ngOnInit(): void {
    this._MovieAPIService.upcomingMovies().subscribe({
      next: (response) => {
        console.log(response.results);
        this.upComing = response.results;
      },
    });
  }
}
