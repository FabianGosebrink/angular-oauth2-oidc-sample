import { AuthState, authFeatureName } from './auth.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getAuthFeatureState = createFeatureSelector(authFeatureName);

export const selectIsAuthenticated = createSelector(
  getAuthFeatureState,
  (state: AuthState) => state.isLoggedIn
);

export const selectuserInfo = createSelector(
  getAuthFeatureState,
  (state: AuthState) => state.profile
);
