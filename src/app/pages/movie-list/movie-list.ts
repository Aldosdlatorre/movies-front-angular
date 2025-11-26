import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [NgFor, NgIf, RouterLink],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css',
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];
  loading = true;

  constructor(private service: MovieService, private router: Router) {}

  ngOnInit(): void {
    this.service.getAll().subscribe(data => {
      this.movies = data;
      this.loading = false;
    });
  }

  goToDetail(movie: Movie) {
    this.router.navigate(['/peliculas', movie.id]);
  }

  addMovie() {
    this.router.navigate(['/peliculas/nueva']);
  }
}
