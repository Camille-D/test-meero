import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCatsComponent } from './list-cats.component';


const routes: Routes = [
  {
    path: '', component: ListCatsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class ListCatsRoutingModule {
}
