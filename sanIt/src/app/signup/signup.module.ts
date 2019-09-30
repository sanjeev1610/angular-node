import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupCompComponent } from './signup-comp/signup-comp.component';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';
import { UserService } from './../shared/user.service';
import { Interceptor1Servicevice } from '../interceptors/interceptor1.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [SignupCompComponent],
  imports: [
  CommonModule,
    ReactiveFormsModule,
    FormsModule,
    SignupRoutingModule
  ],
  providers:[UserService, {provide: HTTP_INTERCEPTORS, useClass: Interceptor1Servicevice, multi: true}]
})
export class SignupModule { }
