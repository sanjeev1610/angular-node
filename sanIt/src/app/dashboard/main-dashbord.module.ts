import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainDashbordRoutingModule } from './main-dashbord-routing.module';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';


@NgModule({
  declarations: [MainDashboardComponent],
  imports: [
    CommonModule,
    MainDashbordRoutingModule
  ]
})
export class MainDashbordModule { }
