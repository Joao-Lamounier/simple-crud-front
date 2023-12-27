import { People } from './../model/people';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PeoplesService {
  private readonly API = 'api/pessoas';
  constructor(private httpClient: HttpClient) {}

  findAll() {
    return this.httpClient.get<People[]>(this.API).pipe(
      first(),
      tap((peoples) => console.log(peoples))
    );
  }
  save(record: People) {
    console.log(record);
    if (record.id) {
      console.log('update');
      return this.update(record);
    }
    console.log('creat');
    return this.httpClient.post<People>(this.API, record).pipe(first());
  }
  loadById(id: number) {
    return this.httpClient.get<People>(`${this.API}/${id}`);
  }
  private create(record: People) {
    return this.httpClient.post<People>(this.API, record).pipe(first());
  }
  private update(record: People) {
    return this.httpClient
      .put<People>(`${this.API}/${record.id}`, record)
      .pipe(first());
  }
  remove(id: number) {
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }

  download() {
    const downloadPath = 'api/download/planilha';
    return this.httpClient.get(downloadPath, { responseType: 'arraybuffer' });
  }
}
