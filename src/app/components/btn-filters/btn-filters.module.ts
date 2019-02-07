import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnFiltersComponent } from './btn-filters.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BtnFiltersComponent],
  exports: [BtnFiltersComponent]
})
export class BtnFiltersModule { }
