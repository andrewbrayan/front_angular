import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';

import { Actions, createEffect, ofType } from '@ngrx/effects';

import { ChatAPIService } from '@shared/services/chat-api.service';
import { loginUser, registerUser } from '../actions/user.actions';
import { ChatModel, UserModel } from '@shared/models/models';
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {
  loadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[User] Load User'),
      mergeMap(() =>
        this.ChatAPI.getUser().pipe(
          map((userData: UserModel) => ({ type: '[User] Load User Success', userData })),
          tap(() => this.router.navigate(['/chat'])),
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
      ofType('[User] Load User Success'),
      mergeMap(() =>
        this.ChatAPI.getChats().pipe(
          map((userChats: [ChatModel]) => ({ type: '[User] Load Chats User Success', userChats })),
          catchError((res) =>
            of({ type: '[User] Load Chats User Error', error: res.message })
          )
        )
      )
    )
  );

  errorLoadUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[User] Load User Error'),
      tap(() => this.router.navigate(['/login'])),
      map(() => ({ type: '[User] Redirect to login' })),
    )
  );

  constructor(
    private actions$: Actions,
    private ChatAPI: ChatAPIService,
    private router: Router
  ) {}
}
