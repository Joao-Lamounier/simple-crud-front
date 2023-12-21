import { Injectable } from '@angular/core';
import { People } from '../model/people';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeoplesService {
  private readonly API = '../../../assets/peoples.json';
  constructor(private httpClient: HttpClient) {}

  findAll() {
    return this.httpClient.get<People[]>(this.API).pipe(
      first(),
      tap(peoples => console.log(peoples))
    );
  }
}
