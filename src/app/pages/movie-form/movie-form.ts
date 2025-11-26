import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './movie-form.html',
  styleUrl: './movie-form.css',
})
export class MovieFormComponent implements OnInit {

  form!: FormGroup;
  editing = false;
  movieId?: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private movieService: MovieService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      title: ['', Validators.required],
      synopsis: ['', Validators.required],
      cover_url: ['', Validators.required],
      year: ['', [Validators.required, Validators.min(1900)]],
    });

    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.editing = true;
      this.movieId = Number(id);

      this.movieService.getOne(this.movieId).subscribe(movie => {
        this.form.patchValue(movie);
      });
    }
  }

  save() {
    if (this.form.invalid) return;

    if (this.editing && this.movieId) {
      this.movieService.update(this.movieId, this.form.value)
        .subscribe(() => this.router.navigate(['/catalogo']));
    } else {
      this.movieService.create(this.form.value)
        .subscribe(() => this.router.navigate(['/catalogo']));
    }
  }

  cancel() {
    this.router.navigate(['/catalogo']);
  }
}
