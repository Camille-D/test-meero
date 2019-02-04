import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  private baseApi = 'https://api.thecatapi.com/v1/';

  constructor(private http: HttpClient) { }

  createAuthorizationHeader(headers: Headers) {
    headers.append('Content-Type', 'application/json');
    headers.append('x-api-key', `19f2e642-225c-4480-afab-5e0c2137b001`);
  }

  getCats(): Observable<any> {
    const header = new Headers();
    this.createAuthorizationHeader(header);
    return this.http.get<any>(this.baseApi + 'breeds');
  }
}
