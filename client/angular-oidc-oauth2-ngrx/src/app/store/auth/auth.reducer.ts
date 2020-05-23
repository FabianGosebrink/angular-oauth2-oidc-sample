import { createReducer, on, Action } from '@ngrx/store';
import * as authActions from './auth.actions';

export const authFeatureName = 'auth';

export interface AuthState {
  profile: any;
  isLoggedIn: boolean;
}

export const initialAuthState: AuthState = {
  isLoggedIn: false,
  profile: null,
};

const authReducerInternal = createReducer(
  initialAuthState,

  on(authActions.loginComplete, (state, { profile, isLoggedIn }) => {
    return {
      ...state,
      profile,
      isLoggedIn,
    };
  }),
  on(authActions.logout, (state, {}) => {
    return {
      ...state,
      profile: null,
      isLoggedIn: false,
    };
  })
);

export function authReducer(state: AuthState | undefined, action: Action) {
  return authReducerInternal(state, action);
}
