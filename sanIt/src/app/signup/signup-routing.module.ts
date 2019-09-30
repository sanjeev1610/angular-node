import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupCompComponent } from './signup-comp/signup-comp.component';


const routes: Routes = [
  {path: 'signup', component: SignupCompComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class SignupRoutingModule { }
