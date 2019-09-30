import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, JsonpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product, Products } from './../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  addProductAPI(obj: any): Observable<any> {
    return this.http.post('http://127.0.0.1:3000/products/add-product', obj, {
      reportProgress: true,
      observe: 'events'
      });
  }

  getProductAPI(): Observable<any> {
    return this.http.get('http://127.0.0.1:3000/products');
  }

  getProductDetail(prodId: any): Observable<Products> {
    return this.http.get<Products>('http://127.0.0.1:3000/products/' + prodId);
  }


  getLocalStorage() {
    let cartstore : any[]= JSON.parse(localStorage.getItem('cart'));
    if (cartstore === null) {
      return 0;
    } else {
      return cartstore.length;

    }
  }




}
