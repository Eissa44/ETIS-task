import { IMovies } from 'src/app/core/interfaces/i-movies';
import { Component, OnInit } from '@angular/core';
import { MovieAPIService } from 'src/app/core/services/movie-api.service';

@Component({
  selector: 'app-now-playing-movies',
  templateUrl: './now-playing-movies.component.html',
  styleUrls: ['./now-playing-movies.component.css'],
})
export class NowPlayingMoviesComponent implements OnInit {
  constructor(private _MovieAPIService: MovieAPIService) {}
  playingNow: IMovies[] = [];
  imagePath: string = `https://image.tmdb.org/t/p/w500/`;

  ngOnInit(): void {
    this._MovieAPIService.nowPlayingMovies().subscribe({
      next: (response) => {
        this.playingNow = response.results;
      },
    });
  }
}
