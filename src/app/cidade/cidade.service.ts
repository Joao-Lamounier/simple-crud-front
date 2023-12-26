// cidade.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cidade } from '../peoples/model/people';

@Injectable({
  providedIn: 'root',
})
export class CidadeService {
  private baseUrl = '/api/cidade';

  constructor(private http: HttpClient) {}

  getCidadesPorEstado(estado: string): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(`${this.baseUrl}/estado/${estado}`);
  }
}
