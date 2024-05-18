import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { IMovies } from 'src/app/core/interfaces/i-movies';
import { MovieAPIService } from 'src/app/core/services/movie-api.service';

@Component({
  selector: 'app-popular-movie',
  templateUrl: './popular-movie.component.html',
  styleUrls: ['./popular-movie.component.css'],
})
export class PopularMovieComponent implements OnInit {
  constructor(private _MovieAPIService: MovieAPIService) {}
  imagePath: string = `https://image.tmdb.org/t/p/w500/`;
  popular: IMovies[] = [];

  ngOnInit(): void {
    this._MovieAPIService.popularMovies().subscribe({
      next: (response) => {
        this.popular = response.results;
      },
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    autoplay: true,
    navSpeed: 500,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
}
