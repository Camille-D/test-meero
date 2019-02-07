import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-btn-filters',
  templateUrl: './btn-filters.component.pug',
  styleUrls: ['./btn-filters.component.scss']
})
export class BtnFiltersComponent {

  @Input() breeds: string[];
  @Output() breedSelected: EventEmitter<string> = new EventEmitter();

  constructor() { }

  breedSelectedFn(breed: string) {
    this.breedSelected.emit(breed);
  }

}
