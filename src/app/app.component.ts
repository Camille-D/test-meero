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

  constructor(
    private catsService: CatsService
  ) {}

  ngOnInit(): void {
    this.catsService.getCats()
      .pipe(
        map((result) => {
          console.log('result', result);
          this.cats = result;
        })
      )
      .subscribe();
  }
}
