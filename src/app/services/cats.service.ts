import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { CatInterface } from '../interfaces/cat.interface';
import { CatsData } from './catsData';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  private baseApi = 'https://api.thecatapi.com/v1/';

  constructor(private http: HttpClient) { }

  getCats(): Observable<CatInterface[]> {
    return this.http.get<CatInterface[]>(this.baseApi + 'breeds');
  }

  getCatsByBreed(breed: string): Observable<CatInterface[]> {
    return this.http.get<CatInterface[]>(this.baseApi + `breeds?attach_breed=${breed}`);
  }

  getCatsFake$(): Observable<CatInterface[]> {
    return of(CatsData);
  }

  getCatsByBreedFake$(breed) {
    return CatsData.filter((cat) => cat.origin === breed);
  }

  getListOfBreeds(catsList: CatInterface[]) {
    const breedsList = ['all'];
    catsList.forEach((cat) => {
      if (cat.origin && !breedsList.includes(cat.origin)) {
        breedsList.push(cat.origin);
      }
    });
    return breedsList;
  }
}
