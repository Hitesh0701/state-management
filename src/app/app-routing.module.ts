import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersLayoutComponent } from './users/users-layout/users-layout.component';
import { AuthLayoutComponent } from './auth/auth-layout/auth-layout.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { UserListComponent } from './users/pages/user-list/user-list.component';
import { ParentComponent } from './io-operation/parent/parent.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
  {
    path:'',
    component: AuthLayoutComponent,
    // loadChildren: './auth/auth.module#AuthModule',

    children: [
      {
        path:'',
        component: LoginComponent
      }
    ]
  },
  {
    path:'users',
    component: UsersLayoutComponent,
    children: [
      {
        path:'',
        component: UserListComponent
      }
    ]
  },
  {
    path:'io-operation',
    component: ParentComponent
  },
  {
    path: 'multi-level-form-array',
    loadChildren: () => import('./multilevel-form-array/multilevel-form-array.module').then(m => m.MultilevelFormArrayModule)
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
