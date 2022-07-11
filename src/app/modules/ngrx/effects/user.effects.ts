import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { ChatAPIService } from '@shared/services/chat-api.service';
import { loginUser } from '../actions/user.actions';

@Injectable()
export class UserEffects {
  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[User] Load User'),
      mergeMap(() =>
        this.ChatAPI.getUser().pipe(
          map((user) => ({ type: '[User] Load User Success', userData: user })),
          catchError(() => of({ type: '[User] Load User Error' }))
        )
      )
    )
  );

  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginUser),
      mergeMap((action) =>
        this.ChatAPI.getToken(action.credentials).pipe(
          map((token) => ({ type: '[User] Load User', userToken: token })),
          catchError(() => of({ type: '[User] Load User Error' })),
          tap((data) => {console.log(data)})
        )
      )
    )
  );

  constructor(private actions$: Actions, private ChatAPI: ChatAPIService) {}
}
