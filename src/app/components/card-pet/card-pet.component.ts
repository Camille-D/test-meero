import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-pet',
  templateUrl: './card-pet.component.pug',
  styleUrls: ['./card-pet.component.scss']
})
export class CardPetComponent implements OnInit {

  @Input() cat;

  constructor() {
  }

  ngOnInit() {

  }
}
