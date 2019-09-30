import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './shared/auth.service';

import { Observable, Subject } from 'rxjs';
import { Store } from '@ngrx/store';

import { CartCount } from './models/cartcount.model';
import { AppState } from './app.state';
import { SubjectService } from './shared/subject.service';
import { ProductService } from './shared/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'sanIt';
  ccount = 0;

  localCount: Observable<CartCount>;

  constructor(private router: Router, private auth: AuthService, private proSer: ProductService,
              private store: Store<AppState>, private subj: SubjectService) {

               this.ccount = proSer.getLocalStorage();


               this.localCount = store.select('count');


  }

  ngOnInit() {
     this.subj.subject$.subscribe(count => this.ccount = count);

  }

  

}


