import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of, throwError } from 'rxjs';
import { map, tap, sample, switchMap } from 'rxjs/operators';

import { load, loadComplete } from './dashboard.actions';
import { HeroService } from '../../hero.service';

@Injectable()
export class DashBoardEffects {
  randomAdd = createEffect(() => this.actions$.pipe(
    ofType(load),
    // sample(this.heroService.getHeroes()),
    switchMap(() => of({payload: [
      { id: 11, name: 'Dr Nice' },
      { id: 12, name: 'Narco' },
      { id: 13, name: 'Bombasto' },
      { id: 14, name: 'Celeritas' },
      { id: 15, name: 'Magneta' },
      { id: 16, name: 'RubberMan' },
      { id: 17, name: 'Dynama' },
      { id: 18, name: 'Dr IQ' },
      { id: 19, name: 'Magma' },
      { id: 20, name: 'Tornado' }
    ]}).pipe(map((res) => loadComplete(res))
  ))));

  constructor(
    private actions$: Actions,
    private store$: Store<{}>,
    private heroService: HeroService) { }
}
