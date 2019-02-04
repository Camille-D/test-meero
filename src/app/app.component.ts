import { Component, OnInit } from '@angular/core';
import { CatsService } from './services/cats.service';
import { map } from 'rxjs/operators';
import { CatInterface } from './interfaces/cat.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.pug',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  cats: CatInterface[];
  breeds = ['all'];
  catSelected: CatInterface;
  displayModal = false;

  constructor(
    private catsService: CatsService
  ) {}

  ngOnInit(): void {
    this.getAllCats();
  }

  getAllCats() {
    this.catsService.getCats()
      .pipe(
        map((result:  CatInterface[]) => {
          this.cats = result;
          return this.cats;
        }),
        map((cats) => {
          this.createFiltersList(cats);
        })
      )
      .subscribe();
  }

  private createFiltersList(catsList: CatInterface[]) {
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
          map((result:  CatInterface[]) => {
            if (result) {
              this.cats = result;
            }

          })
        )
        .subscribe();
    }

  }

  openModalCatDetails(cat: CatInterface) {
    this.catSelected = cat;
    this.displayModal = !this.displayModal;
  }
}
