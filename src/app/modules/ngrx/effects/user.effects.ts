import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { ChatAPIService } from '@shared/services/chat-api.service';
import { loginUser, registerUser } from '../actions/user.actions';

@Injectable()
export class UserEffects {
  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[User] Load User'),
      mergeMap(() =>
        this.ChatAPI.getUser().pipe(
          map((userData) => ({ type: '[User] Load User Success', userData })),
          catchError((res) =>
            of({ type: '[User] Load User Error', error: res.message })
          )
        )
      )
    )
  );

  loginUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginUser),
      mergeMap((action) =>
        this.ChatAPI.login(action.credentials).pipe(
          tap((data) => {
            localStorage.setItem('token', data.token);
          }),
          tap((data) => {
            this.ChatAPI.setToken(data.token);
          }),
          map(() => ({ type: '[User] Load User' })),
          catchError((res) =>
            of({ type: '[User] Load User Error', error: res.message })
          )
        )
      )
    )
  );

  registerUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerUser),
      mergeMap((action) =>
        this.ChatAPI.register(action.credentials).pipe(
          map(() => ({ type: '[User] Load User' })),
          catchError((res) =>
            of({ type: '[User] Load User Error', error: res.message })
          )
        )
      )
    )
  );

  getChats$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[User] Load User'),
      mergeMap(() =>
        this.ChatAPI.getChats().pipe(
          map((chats) => ({ type: '[User] Load User Success', chats })),
          catchError((res) =>
            of({ type: '[User] Load User Error', error: res.message })
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private ChatAPI: ChatAPIService,
  ) {}
}
