import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap, tap } from 'rxjs/operators';
import * as fromAuthActions from './auth.actions';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { AuthService } from '../../services/auth.service';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private router: Router
  ) {}

  login$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.login),
        switchMap(() => this.authService.doLogin())
      ),
    { dispatch: false }
  );

  checkauth$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAuthActions.checkAuth),
      switchMap(() =>
        this.authService
          .checkAuth()
          .pipe(
            map((isLoggedIn) =>
              fromAuthActions.checkAuthComplete({ isLoggedIn })
            )
          )
      )
    )
  );

  checkAuthComplete$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAuthActions.checkAuthComplete),
      switchMap(({ isLoggedIn }) => {
        if (isLoggedIn) {
          return this.authService.userData.pipe(
            map((profile) =>
              fromAuthActions.loginComplete({ profile, isLoggedIn })
            )
          );
        }
        return of(fromAuthActions.logoutComplete());
      })
    )
  );

  logout$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fromAuthActions.logout),
      tap(() => this.authService.signOut()),
      map(() => fromAuthActions.logoutComplete())
    )
  );

  logoutComplete$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fromAuthActions.logoutComplete),
        tap(() => {
          this.router.navigate(['/']);
        })
      ),
    { dispatch: false }
  );
}
