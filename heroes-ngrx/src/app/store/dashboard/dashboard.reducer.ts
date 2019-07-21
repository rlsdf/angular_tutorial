import { Action, createReducer, on } from '@ngrx/store';
import { loadComplete } from './dashboard.actions';

const reducer = createReducer(
  { dashboard: [] },
  on(loadComplete, (state, action: any) => {
    console.log(action);

    return {
      ...state,
      ...action.payload
    };
  }
));

export function dashboardReducer(
  state: any,
  action: any) {
  return reducer(state, action);
}
