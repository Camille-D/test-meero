import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCatsComponent } from './list-cats.component';
import { CardPetModule } from '../../components/card-pet/card-pet.module';
import { ModalModule } from '../../components/modal/modal.module';
import { ListCatsRoutingModule } from './list-cats-routing.module';

@NgModule({
  imports: [
    CommonModule,
    ListCatsRoutingModule,
    CardPetModule,
    ModalModule
  ],
  declarations: [ListCatsComponent]
})
export class ListCatsModule { }
