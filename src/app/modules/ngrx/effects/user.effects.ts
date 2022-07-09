import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { ChatAPIService } from '@shared/services/chat-api.service';
import { UserModel } from '@shared/models/models';

@Injectable()
export class UserEffects {
  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[User] Load User'),
      mergeMap(() =>
        this.ChatAPI.getUser().pipe(
          map((user) => ({ type: '[User] Load User Success', userData: user })),
          catchError(() => of({ type: '[User] Load User error' }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private ChatAPI: ChatAPIService) {}
}
