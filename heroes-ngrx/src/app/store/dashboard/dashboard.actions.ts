import { createAction, props } from '@ngrx/store';

export const load = createAction('[Dashboard] load');
export const loadComplete = createAction('[Dashboard] load complete', props());
