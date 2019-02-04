import { Component, OnInit } from '@angular/core';
import { CatsService } from './services/cats.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  cats;
  breeds = ['all'];

  constructor(
    private catsService: CatsService
  ) {}

  ngOnInit(): void {
    this.getAllCats();
  }

  getAllCats() {
    this.catsService.getCats()
      .pipe(
        map((result) => {
          console.log('result', result);
          this.cats = result;
          return this.cats;
        }),
        map((cats) => {
          this.createFiltersList(cats);
        })
      )
      .subscribe();
  }

  private createFiltersList(catsList) {
    catsList.filter((cat) => {
      if (cat.origin && !this.breeds.includes(cat.origin)) {
        this.breeds.push(cat.origin);
      }
    });
  }

  getCatsByBreed(breed: string) {
    // breed = breed.toLocaleLowerCase();
    this.cats = [];

    if (breed === 'all') {
      this.getAllCats();
    } else {
      this.catsService.getCatsByBreed(breed)
        .pipe(
          map((result) => {
            if (result) {
              this.cats = result;
            }

          })
        )
        .subscribe();
    }

  }
}
