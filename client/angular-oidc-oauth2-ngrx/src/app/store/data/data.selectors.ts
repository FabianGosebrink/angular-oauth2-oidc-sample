import { DataState, dataFeatureName } from './data.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getDataFeatureState = createFeatureSelector(dataFeatureName);

export const selectData = createSelector(
  getDataFeatureState,
  (state: DataState) => state.data
);
