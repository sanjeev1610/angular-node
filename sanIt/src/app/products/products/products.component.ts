import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../shared/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

   products ;
   productObservable;

  constructor(private prod: ProductService) { }

  ngOnInit() {
    // tslint:disable-next-line: max-line-length
    this.productObservable = this.prod.getProductAPI().subscribe(this.successCb, this.errcb);
  }
  successCb = (res) => {
    this.products = res.products.prod;
    console.log('success cb');

  }
  errcb = (err) => {
    console.log('clientside error');
  }

}
