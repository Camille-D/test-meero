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
  breeds = [];

  constructor(
    private catsService: CatsService
  ) {}

  ngOnInit(): void {
    this.catsService.getCats()
      .pipe(
        map((result) => {
          console.log('result', result);
          this.cats = result;
          return this.cats;
        }),
        map((cats) => {
          this.createListFilters(cats);
        })
      )
      .subscribe();
  }

  private createListFilters(catsList) {
    catsList.filter((cat) => {
      if (cat.origin && !this.breeds.includes(cat.origin)) {
        this.breeds.push(cat.origin);
      }
    });
  }
}
