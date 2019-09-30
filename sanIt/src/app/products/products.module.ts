import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule , FormsModule} from '@angular/forms';


import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products/products.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { AuthService } from './../shared/auth.service';
import { ProdDetailsComponent } from './prod-details/prod-details.component';
import { ProductService } from '../shared/product.service';
import { SubjectService } from '../shared/subject.service';



@NgModule({
  declarations: [ProductsComponent, ProductsEditComponent, ProdDetailsComponent],
  imports: [
CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ProductsRoutingModule,
  ],
  providers: [AuthService, ProductService, SubjectService]
})
export class ProductsModule { }
