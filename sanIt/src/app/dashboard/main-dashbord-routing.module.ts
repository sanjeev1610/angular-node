import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { CanactivateGuard } from '../router-guard/canactivate.guard';


const routes: Routes = [
  {path: 'user/dashboard', component: MainDashboardComponent, canActivate: [CanactivateGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule],
providers: [CanactivateGuard]
})
export class MainDashbordRoutingModule { }
