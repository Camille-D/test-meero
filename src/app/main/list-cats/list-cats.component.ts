import { Component, OnInit } from '@angular/core';
import { CatInterface } from '../../interfaces/cat.interface';
import { first, map } from 'rxjs/operators';
import { CatsService } from '../../services/cats.service';

@Component({
  selector: 'app-list-cats',
  templateUrl: './list-cats.component.pug',
  styleUrls: ['./list-cats.component.scss']
})
export class ListCatsComponent implements OnInit {

  cats: CatInterface[];
  breeds: string[];

  constructor(
    private catsService: CatsService
  ) { }

  ngOnInit() {
    this.getAllCats();
  }

  private getAllCats() {
    this.catsService.getCatsFake$()
      .pipe(
        first(),
        map((cats: CatInterface[]) => {
          this.cats = cats;
          return this.cats;
        }),
        map((cats) => {
          this.breeds = this.catsService.getListOfBreeds(cats);
        })
      )
      .subscribe();
  }


  getCatsByBreed(breed: string) {
    // breed = breed.toLocaleLowerCase();
    this.cats = [];
    if (breed === 'all') {
      this.getAllCats();
    } else {
      this.cats = this.catsService.getCatsByBreedFake$(breed);
    }

  }
}
