import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet, RouterLinkActive  } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HttpClientModule, RouterLinkActive ],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('movies-front-angular');
}
