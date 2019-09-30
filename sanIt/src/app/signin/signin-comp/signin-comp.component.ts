import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { UserService } from './../../shared/user.service';
import { User } from 'src/app/models/user';
import { HttpErrorResponse } from '@angular/common/http';
import { Router, NavigationExtras } from '@angular/router';
import { hasLifecycleHook } from '@angular/compiler/src/lifecycle_reflector';

@Component({
  selector: 'app-signin-comp',
  templateUrl: './signin-comp.component.html',
  styleUrls: ['./signin-comp.component.css']
})
export class SigninCompComponent implements OnInit {

  signinForm: FormGroup;
  apiSubscribe;
  apiResult: User;
  token;
  currentUserEmail;

 navExtras: NavigationExtras ;

  constructor(private fb: FormBuilder, private userserv: UserService, private router: Router) { }

  ngOnInit() {
    this.signinForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.minLength(4), Validators.required]),
    }
    );

  }
   submit() {
    // this.submitted = true;
    if (this.signinForm.invalid) {
        return;
    }
    this.apiSubscribe = this.userserv.signinApi(JSON.stringify(this.signinForm.value)).
                         subscribe(this.succssCb, this.failCb);
  }
  get f() { return this.signinForm.controls; }



  succssCb = (res) => {
    this.apiResult = res.user;
    this.currentUserEmail = this.apiResult.email;
    this.navExtras = {
      queryParams: {
        'user' : this.currentUserEmail
      }
     };

    this.token = res.token;
    localStorage.setItem('token', res.token);
    localStorage.setItem('id', res.user._id);
    this.signinForm.reset();
    this.router.navigate(['user/dashboard']);
    // this.router.navigate(['user/dashboard'] , this.navExtras);

  }
  failCb = (err: HttpErrorResponse) => {
    console.log('Clent side Error');
  }
}

