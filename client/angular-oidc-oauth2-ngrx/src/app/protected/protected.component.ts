import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectuserInfo, getData, selectData } from '../store';

@Component({
  selector: 'app-protected',
  templateUrl: './protected.component.html',
  styleUrls: ['./protected.component.css'],
})
export class ProtectedComponent implements OnInit {
  secretData$: Observable<any>;
  userData$: Observable<any>;

  constructor(private store: Store<any>) {}

  ngOnInit(): void {
    this.userData$ = this.store.pipe(select(selectuserInfo));
    this.secretData$ = this.store.pipe(select(selectData));
    this.store.dispatch(getData());
  }
}
