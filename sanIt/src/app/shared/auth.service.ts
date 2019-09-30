import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  isLoginUser() {
      return !!localStorage.getItem('token');
  }
  getUserEmail() {
    const id = localStorage.getItem('id');
    return this.http.get('http://localhost:3000/users/user/' + id);
  }

}
