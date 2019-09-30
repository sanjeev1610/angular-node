import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, FormBuilder } from '@angular/forms';
import { MustMatch } from './../cnfpwd.directive';
import { UserService } from './../../shared/user.service';
import { User } from './../../models/user';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-comp',
  templateUrl: './signup-comp.component.html',
  styleUrls: ['./signup-comp.component.css']
})
export class SignupCompComponent implements OnInit {

  signupForm: FormGroup;
  //submitted = false;
  apiSubscription;
  apiResult: User;
  apiError;

  constructor(private fb: FormBuilder, private userserv: UserService, private router: Router) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.minLength(4), Validators.required]),
      cnfPassword: new FormControl('', [Validators.minLength(4), Validators.required] )
    },
    { validator : MustMatch('password', 'cnfPassword') }
    );

  }
   submit() {
    // this.submitted = true;
    this.apiSubscription = this.userserv.signupApi(JSON.stringify(this.signupForm.value))
    .subscribe(this.succssCb, this.failCb);
    console.log(this.signupForm);
    if (this.signupForm.invalid) {
        return;
    }
    // this.signupForm.reset();
  }
  get f() { return this.signupForm.controls; }

   succssCb = (res) => {
    this.apiResult = res.user;
    this.signupForm.reset();
    this.router.navigate(['/signin']);
  }
  failCb = (err: HttpErrorResponse) => {
    if(err.error instanceof Error) {
      this.apiError = "Email Already Exists";
      console.log('Clent side Error');

    } else {
      this.apiError = "Email already exists";
      console.log('Server side Error');
    }
  }

}
