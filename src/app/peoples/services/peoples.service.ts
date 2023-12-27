import { People } from './../model/people';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeoplesService {
  private readonly API = 'api/pessoas';
  // private readonly API = '../../../assets/peoples.json';
  constructor(private httpClient: HttpClient) {}

  findAll() {
    return this.httpClient.get<People[]>(this.API).pipe(
      first(),
      tap((peoples) => console.log(peoples))
    );
  }
  save(record: People) {
    return this.httpClient.post<People>(this.API, record).pipe(first());
  }
  loadById(id: number) {
    return this.httpClient.get<People>(`${this.API}/${id}`);
  }
}
