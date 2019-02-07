import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    RouterModule,
  ],
  declarations: [MainComponent]
})
export class MainModule { }
