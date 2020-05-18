import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit {
  userData$: Observable<any>;
  secretData$: Observable<any>;
  isAuthenticated$: Observable<boolean>;
  constructor(
    private authservice: AuthService,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    this.userData$ = this.authservice.userData;
    this.isAuthenticated$ = this.authservice.isLoggedIn;

    this.secretData$ = this.httpClient
      .get('https://localhost:5001/api/securevalues')
      .pipe(catchError((error) => of(error)));
  }

  login() {
    this.authservice.doLogin();
  }

  logout() {
    this.authservice.signOut();
  }
}
