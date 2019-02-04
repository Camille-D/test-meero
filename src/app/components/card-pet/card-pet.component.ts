import { Component, Input, OnInit } from '@angular/core';
import { CatsService } from '../../services/cats.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-card-pet',
  templateUrl: './card-pet.component.pug',
  styleUrls: ['./card-pet.component.scss']
})
export class CardPetComponent implements OnInit {

  @Input() cat;

  constructor(private catsService: CatsService) { }

  ngOnInit() {
    if (this.cat && this.cat.wikipedia_url) {
      // this.catsService.getImageCat(this.cat.wikipedia_url)
      //   .pipe(
      //     map((result) => {
      //       console.log('result', result);
      //     })
      //   ).subscribe();
    }
  }

}
