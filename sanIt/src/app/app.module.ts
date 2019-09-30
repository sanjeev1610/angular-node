import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupModule } from './signup/signup.module';
import { SinginModule } from './signin/singin.module';
import { UserService } from './shared/user.service';
import { IndexComponent } from './Index/index/index.component';
import { MainDashbordModule } from './dashboard/main-dashbord.module';
import { ProductsModule } from './products/products.module';
import { AuthService } from './shared/auth.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {StoreModule, Store} from '@ngrx/store';
import {reducer} from './reducers/cartcount.reducer';
import {MatBadgeModule} from '@angular/material/badge';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { SubjectService } from './shared/subject.service';
import { ProductService } from './shared/product.service';




@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavbarComponent,
  ],
  imports: [
  BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SignupModule,
    SinginModule,
    MainDashbordModule,
    ProductsModule,
    BrowserAnimationsModule,
    MatBadgeModule,
    MatIconModule,
    StoreModule.forRoot({
      'count': reducer
    })
  ],
  providers: [UserService, AuthService, SubjectService, ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
