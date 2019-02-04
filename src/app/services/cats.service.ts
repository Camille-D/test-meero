import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  private baseApi = 'https://api.thecatapi.com/v1/';

  constructor(private http: HttpClient) { }

  getCats(): Observable<any> {
    return this.http.get<any>(this.baseApi + 'breeds');
  }
}
