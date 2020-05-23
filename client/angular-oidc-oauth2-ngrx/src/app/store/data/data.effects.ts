import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import * as fromDataActions from './data.actions';
import { DataService } from '../../services/data.service';

@Injectable()
export class DataEffects {
  constructor(private actions$: Actions, private dataService: DataService) {}

  getData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromDataActions.getData),
      switchMap(() =>
        this.dataService
          .getData()
          .pipe(map((data) => fromDataActions.getDataComplete({ data })))
      )
    )
  );
}
