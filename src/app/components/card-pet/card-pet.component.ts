import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CatsService } from '../../services/cats.service';

@Component({
  selector: 'app-card-pet',
  templateUrl: './card-pet.component.pug',
  styleUrls: ['./card-pet.component.scss']
})
export class CardPetComponent implements OnInit {

  @Input() cat;
  @Output() openModal = new EventEmitter();

  constructor(private catsService: CatsService) { }

  ngOnInit() {

  }

  showDetails() {
    this.openModal.emit(this.cat);
  }

}
