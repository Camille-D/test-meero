import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CatInterface } from '../interfaces/cat.interface';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  private baseApi = 'https://api.thecatapi.com/v1/';

  constructor(private http: HttpClient) { }

  getCats(): Observable<CatInterface[]> {
    return this.http.get<CatInterface[]>(this.baseApi + 'breeds');
  }

  getCatsByBreed(breed): Observable<CatInterface[]> {
    return this.http.get<CatInterface[]>(this.baseApi + `breeds?attach_breed=${breed}`);
  }

}
