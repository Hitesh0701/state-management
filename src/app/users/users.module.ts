import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { UsersRoutingModule } from './users-routing.module';
import { UsersLayoutComponent } from './users-layout/users-layout.component';
import { UserAddComponent } from './pages/user-add/user-add.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { FilterPipe } from '../filter.pipe';

@NgModule({
  declarations: [UsersLayoutComponent, UserAddComponent, UserListComponent, FilterPipe],
  imports: [
    CommonModule,
    UsersRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
