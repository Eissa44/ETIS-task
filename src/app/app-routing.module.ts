import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NowPlayingMoviesComponent } from './components/now-playing-movies/now-playing-movies.component';
import { PopularMovieComponent } from './components/popular-movie/popular-movie.component';
import { RegisterComponent } from './components/register/register.component';
import { TopMoviesComponent } from './components/top-movies/top-movies.component';
import { UpcomigMoviesComponent } from './components/upcomig-movies/upcomig-movies.component';
import { authenticationGuard } from './core/guard/authentication.guard';
import { LayoutAuthComponent } from './layouts/layout-auth/layout-auth.component';
import { LayoutBlankComponent } from './layouts/layout-blank/layout-blank.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [authenticationGuard],
    component: LayoutBlankComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: TopMoviesComponent, title: 'Top Movies' },
      {
        path: 'upcoming',
        component: UpcomigMoviesComponent,
        title: 'Up Coming Movies',
      },
      {
        path: 'playing',
        component: NowPlayingMoviesComponent,
        title: 'Playing Now',
      },
      {
        path: 'popular',
        component: PopularMovieComponent,
        title: 'Pupolar Movies',
      },
    ],
  },

  {
    path: '',
    component: LayoutAuthComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent, title: 'Login' },
      {
        path: 'register',
        component: RegisterComponent,
        title: 'Create an account ',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
