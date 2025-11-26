import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home';
import { MovieListComponent } from './pages/movie-list/movie-list';
import { MovieDetailComponent } from './pages/movie-detail/movie-detail';
import { MovieFormComponent } from './pages/movie-form/movie-form';


export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalogo', component: MovieListComponent },
  { path: 'peliculas/nueva', component: MovieFormComponent },
  { path: 'peliculas/:id', component: MovieDetailComponent },
  { path: 'peliculas/:id/editar', component: MovieFormComponent },
  { path: '**', redirectTo: '' },
];
