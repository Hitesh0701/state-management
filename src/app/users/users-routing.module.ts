import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersLayoutComponent } from './users-layout/users-layout.component';
import { UserListComponent } from './pages/user-list/user-list.component';
import { UserAddComponent } from './pages/user-add/user-add.component';

const routes: Routes = [
  {
    path: 'users',
    component: UsersLayoutComponent,
    children: [
      {
        path: 'user-list',
        component: UserListComponent
      },
      {
        path: 'add-user',
        component: UserAddComponent
      },
      {
        path: 'add-user/:id',
        component: UserAddComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
