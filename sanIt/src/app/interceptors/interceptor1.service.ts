import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Interceptor1Servicevice implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const reqClone = req.clone({headers: new HttpHeaders({
    //                             'Content-Type' : 'application/json'
    //                            })
    //                   });
    return next.handle(req);
  }

  constructor() { }
}
