import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Store, select } from '@ngrx/store';
import {
  selectIsAuthenticated,
  selectuserInfo,
  logout,
  login,
  getData,
} from '../store';
import { selectData } from '../store';
import { tap, filter } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
})
export class HomeComponent implements OnInit {
  userData$: Observable<any>;
  secretData$: Observable<any>;
  isAuthenticated$: Observable<boolean>;

  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.userData$ = this.store.pipe(select(selectuserInfo));
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated)).pipe(
      filter((isAuthenticated) => !!isAuthenticated),
      tap(() => this.store.dispatch(getData()))
    );

    this.secretData$ = this.store.pipe(select(selectData));
  }

  login() {
    this.store.dispatch(login());
  }

  logout() {
    this.store.dispatch(logout());
  }
}
