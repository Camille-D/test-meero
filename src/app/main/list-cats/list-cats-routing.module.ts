import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCatsComponent } from './list-cats.component';
import { DetailsCatComponent } from '../details-cat/details-cat.component';
import { ModalModule } from '../../components/modal/modal.module';


const routes: Routes = [
  {
    path: '',
    component: ListCatsComponent,
    children: [{
      path: 'cat',
      component: DetailsCatComponent,
      outlet: 'modal'
    }]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    ModalModule
  ],
  exports: [
    RouterModule
  ],
  declarations: [DetailsCatComponent]
})
export class ListCatsRoutingModule {
}
