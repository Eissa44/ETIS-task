import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieAPIService {
  constructor(private _HttpClient: HttpClient) {}

  baseUrl: string = `https://api.themoviedb.org/3/movie/`;

  getTopMovies(): Observable<any> {
    return this._HttpClient.get(
      this.baseUrl + `top_rated?language=en-US&page=1`
    );
  }

  upcomingMovies(): Observable<any> {
    return this._HttpClient.get(
      this.baseUrl + `upcoming?language=en-US&page=1`
    );
  }

  nowPlayingMovies(): Observable<any> {
    return this._HttpClient.get(
      this.baseUrl + `now_playing?language=en-US&page=1`
    );
  }

  popularMovies(): Observable<any> {
    return this._HttpClient.get(this.baseUrl + `popular?language=en-US&page=1`);
  }
}
