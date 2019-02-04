import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPetComponent } from './card-pet.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CardPetComponent],
  exports: [CardPetComponent]
})
export class CardPetModule { }
