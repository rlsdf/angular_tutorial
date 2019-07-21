import { ActionReducerMap } from '@ngrx/store';

import { dashboardReducer } from './dashboard';

export const reducers: ActionReducerMap<{}> = {
  dashboard: dashboardReducer
};
