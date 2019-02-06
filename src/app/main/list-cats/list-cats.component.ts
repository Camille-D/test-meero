import { Component, OnInit } from '@angular/core';
import { CatInterface } from '../../interfaces/cat.interface';
import { map } from 'rxjs/operators';
import { CatsService } from '../../services/cats.service';

@Component({
  selector: 'app-list-cats',
  templateUrl: './list-cats.component.pug',
  styleUrls: ['./list-cats.component.scss']
})
export class ListCatsComponent implements OnInit {

  cats: CatInterface[];
  breeds = ['all'];
  catSelected: CatInterface;
  displayModal = false;

  constructor(
    private catsService: CatsService
  ) { }

  ngOnInit() {
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
    catsList.forEach((cat) => {
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
