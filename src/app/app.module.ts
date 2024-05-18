import { environment } from './../enviroments/enviroments';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';

import { NavBlankComponent } from './components/nav-blank/nav-blank.component';
import { NavAuthComponent } from './components/nav-auth/nav-auth.component';
import { TopMoviesComponent } from './components/top-movies/top-movies.component';
import { UpcomigMoviesComponent } from './components/upcomig-movies/upcomig-movies.component';
import { NowPlayingMoviesComponent } from './components/now-playing-movies/now-playing-movies.component';
import { LayoutAuthComponent } from './layouts/layout-auth/layout-auth.component';
import { LayoutBlankComponent } from './layouts/layout-blank/layout-blank.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { MyHttpInterceptor } from './core/interceptors/my-http.interceptor';
import { PopularMovieComponent } from './components/popular-movie/popular-movie.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,

    NavBlankComponent,
    NavAuthComponent,
    TopMoviesComponent,
    UpcomigMoviesComponent,
    NowPlayingMoviesComponent,
    LayoutAuthComponent,
    LayoutBlankComponent,
    LoginComponent,
    RegisterComponent,
    PopularMovieComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: MyHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

const firebaseConfig = {
  apiKey: 'AIzaSyBR5zPO1414BfuTSjZj-Sw3KGodfEIQWt8',
  authDomain: 'movies-users-a4e03.firebaseapp.com',
  projectId: 'movies-users-a4e03',
  storageBucket: 'movies-users-a4e03.appspot.com',
  messagingSenderId: '573740707326',
  appId: '1:573740707326:web:5845a15e29c8420baba4af',
  measurementId: 'G-9N27GJQ7KD',
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
