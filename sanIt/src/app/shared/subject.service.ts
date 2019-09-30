import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

   subject$ = new Subject<number>();
   sCnt: number;

  constructor(private proServ: ProductService) {
    // this.sCnt = this.proServ.getLocalStorage();

   }

   setCout(obj: any[]) {
     this.sCnt = obj.length;
     this.subject$.next(this.sCnt);
   }
  // getCout() {
  //   this.subject$.next(this.sCnt);
  // }
}
