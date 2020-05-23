import { createAction, props } from '@ngrx/store';

export const getData = createAction('[Data] getData');
export const getDataComplete = createAction(
  '[Data] getDataComplete',
  props<{ data: any }>()
);
