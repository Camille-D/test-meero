import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCatsComponent } from './list-cats.component';
import { CardPetModule } from '../../components/card-pet/card-pet.module';
import { ListCatsRoutingModule } from './list-cats-routing.module';
import { BtnFiltersModule } from '../../components/btn-filters/btn-filters.module';
import { DetailsCatComponent } from './details-cat/details-cat.component';
import { ModalModule } from '../../components/modal/modal.module';

@NgModule({
  imports: [
    CommonModule,
    ListCatsRoutingModule,
    CardPetModule,
    BtnFiltersModule,
    ModalModule
  ],
  declarations: [
    ListCatsComponent,
    DetailsCatComponent
  ]
})
export class ListCatsModule { }
