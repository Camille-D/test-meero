import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCatsComponent } from './list-cats.component';
import { DetailsCatComponent } from './details-cat/details-cat.component';


const routes: Routes = [
  {
    path: '',
    component: ListCatsComponent,
  },
  {
    path: 'cat/:id',
    component: DetailsCatComponent,
    outlet: 'modal'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class ListCatsRoutingModule {
}
