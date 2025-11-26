import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MovieService {

  private apiUrl = 'https://movies-api-laravel-production.up.railway.app/api/movies';

  constructor(private http: HttpClient) {}

  // obtener todas las películas
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // obtener una sola película
  getOne(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  // crear
  create(data: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, data);
  }

  // actualizar
  update(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, data);
  }

  // eliminar
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
