import { createComponent } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { MyUserComponent } from './my-user/my-user.component';

const routes: Routes = [
  {
    path:'createUser',
    component: CreateUserComponent
  },

  {
    path: '', component: MyUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
