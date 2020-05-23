import { createReducer, on, Action } from '@ngrx/store';
import * as dataActions from './data.actions';

export const dataFeatureName = 'data';

export interface DataState {
  data: any;
}

export const initialDataState: DataState = {
  data: null,
};

const dataReducerInternal = createReducer(
  initialDataState,

  on(dataActions.getDataComplete, (state, { data }) => {
    return {
      ...state,
      data,
    };
  })
);

export function dataReducer(state: DataState | undefined, action: Action) {
  return dataReducerInternal(state, action);
}
