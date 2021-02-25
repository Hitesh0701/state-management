import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultilevelFormArrayComponent } from './multilevel-form-array/multilevel-form-array.component';

const routes: Routes = [
  {
    path:"",
    component:MultilevelFormArrayComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MultilevelFormArrayRoutingModule { }
