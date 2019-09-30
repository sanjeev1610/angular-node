import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninCompComponent } from './signin-comp/signin-comp.component';


const routes: Routes = [
  {path: 'signin', component: SigninCompComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SinginRoutingModule { }
