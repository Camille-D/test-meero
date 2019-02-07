import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPetComponent } from './card-pet.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [CardPetComponent],
  exports: [CardPetComponent]
})
export class CardPetModule { }
