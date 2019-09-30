import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SinginRoutingModule } from './singin-routing.module';
import { SigninCompComponent } from './signin-comp/signin-comp.component';
import { UserService } from './../shared/user.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { Interceptor1Servicevice } from '../interceptors/interceptor1.service';


@NgModule({
  declarations: [SigninCompComponent],
  imports: [
CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SinginRoutingModule
  ],
  providers: [UserService, {provide: HTTP_INTERCEPTORS, useClass: Interceptor1Servicevice, multi: true}]
})
export class SinginModule { }
