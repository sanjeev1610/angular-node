import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cart = [];
  cartCount = 0;
  @Input() cc = 0;

  constructor(private router: Router) { }

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem('cart'));
    this.cartCount = this.cart.length;
  }

  logout() {
    localStorage.removeItem('token');
    console.log('logout');
    this.router.navigate(['/products']);
  }
  isLogin() {
    return !!localStorage.getItem('token');
  }
}
