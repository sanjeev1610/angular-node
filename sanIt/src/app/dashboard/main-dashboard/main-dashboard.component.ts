import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';
import { map , switchMap, filter} from 'rxjs/operators';
import { AuthService } from './../../shared/auth.service';


@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {

  currentuser;

  constructor(private activatedRoute: ActivatedRoute, private auth: AuthService) { }


  ngOnInit() {
    //  this.activatedRoute.queryParams.pipe(
    //   filter(params=> params.user)
    // ).subscribe(params=>this.user = params.user);

    this.auth.getUserEmail().subscribe(
      usr => this.currentuser = usr['email'],
      err => console.log('client error')
    );

   }
  
}
