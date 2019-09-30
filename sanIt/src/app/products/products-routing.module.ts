import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ProdDetailsComponent } from './prod-details/prod-details.component';

const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: 'productsdetail', component: ProdDetailsComponent},
  {path: 'edit-prod', component: ProductsEditComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
exports: [RouterModule]
})
export class ProductsRoutingModule { }
