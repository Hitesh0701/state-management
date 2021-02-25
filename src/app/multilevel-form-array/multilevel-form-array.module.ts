import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MultilevelFormArrayRoutingModule } from './multilevel-form-array-routing.module';
import { MultilevelFormArrayComponent } from './multilevel-form-array/multilevel-form-array.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [MultilevelFormArrayComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MultilevelFormArrayRoutingModule
  ]
})
export class MultilevelFormArrayModule { }
