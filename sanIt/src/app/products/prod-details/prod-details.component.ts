import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Product, Products } from './../../models/product';
import { ProductService } from './../../shared/product.service';
import { ThrowStmt } from '@angular/compiler';
import { SubjectService } from './../../shared/subject.service';

@Component({
  selector: 'app-prod-details',
  templateUrl: './prod-details.component.html',
  styleUrls: ['./prod-details.component.css']
})
export class ProdDetailsComponent implements OnInit {

  productId;
  productDetail: Products;
  prod: Product;
  cart = [];
  isDuplicate: boolean;
  filtr: any;

  constructor(private activatedRoute: ActivatedRoute, private subj: SubjectService, private prodServ: ProductService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.pipe(
      filter(params => params.id)
    ).subscribe(this.fetchProd);

  }

  fetchProd = (params) => {
    this.productId = params.id;
    this.prodServ.getProductDetail(this.productId).subscribe(
      // tslint:disable-next-line: no-string-literal
      prod => this.productDetail = prod['product'],
      err => console.log('Product detail error in fetching....')
    );

  }

  addToCart() {
      this.prod = new Product(
      this.productDetail.id,
      this.productDetail.title,
      this.productDetail.description,
      this.productDetail.url,
      this.productDetail.price,
    );
      if (localStorage.getItem('cart')) {
        console.log(2);
        this.cart  = JSON.parse(localStorage.getItem('cart'));
        for (const x of this.cart) {
          if (x.id === this.prod.id) {
            this.isDuplicate = true;
          } else {
            this.isDuplicate = false;

          }
        }
        console.log("filtr "+ this.isDuplicate);

        switch (this.isDuplicate) {
         case true: {
            console.log(this.isDuplicate);

            console.log(3);
            for ( const pro of this.cart) {
              if (pro.id === this.prod.id) {
                pro.count += 1;
                console.log(5);

              }

           }
            localStorage.setItem('cart', JSON.stringify(this.cart));
            this.subj.setCout(this.cart);


            break;

        }

      case false: {

          console.log(4);

          this.cart.push(this.prod);
          localStorage.setItem('cart', JSON.stringify(this.cart));
          this.subj.setCout(this.cart);

          break;
          }
    }


    } else {
      console.log(1);
      this.cart.push(this.prod);
      localStorage.setItem('cart', JSON.stringify(this.cart));
       this.subj.setCout(this.cart);

    }





  }

}
