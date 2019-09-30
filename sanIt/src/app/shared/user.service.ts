import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  signupApi(form: any): Observable<any> {
    return this.http.post('http://127.0.0.1:3000/users/signup', form, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type' , 'application/json')
    });
  }

  signinApi(obj: any): Observable<any> {
    return this.http.post('http://127.0.0.1:3000/users/signin', obj,
    {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type' , 'application/json'),
      withCredentials: true
    });
  }
}
