import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pet',
  templateUrl: './card-pet.component.pug',
  styleUrls: ['./card-pet.component.scss']
})
export class CardPetComponent implements OnInit {

  @Input() cat;

  constructor() { }

  ngOnInit() {

  }

}
