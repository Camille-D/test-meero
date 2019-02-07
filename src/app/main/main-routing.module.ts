import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children : [
      {path: '', redirectTo: 'cats-list', pathMatch: 'full'},
      {
        path: 'cats-list',
        loadChildren: './list-cats/list-cats.module#ListCatsModule',
      }
    ]
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
export class MainRoutingModule { }
