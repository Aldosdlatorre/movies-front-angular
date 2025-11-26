import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-detail',
  standalone: true,
  imports: [NgIf, RouterLink],
  templateUrl: './movie-detail.html',
  styleUrl: './movie-detail.css',
})
export class MovieDetailComponent implements OnInit {

  movie: any;
  loading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.movieService.getOne(id).subscribe({
      next: (data) => {
        this.movie = data;
        this.loading = false;
      },
      error: () => {
        this.loading = false;
      }
    });
  }

  back() {
    this.router.navigate(['/catalogo']);
  }

  edit() {
    this.router.navigate(['/peliculas', this.movie.id, 'editar']);
  }

  delete() {
    if (!confirm('¿Deseas borrar esta película?')) {
      return;
    }

    this.movieService.delete(this.movie.id).subscribe(() => {
      this.router.navigate(['/catalogo']);
    });
  }
}
