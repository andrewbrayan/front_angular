import { createAction, props } from '@ngrx/store';
import { LoginUserModel, UserModel } from '@shared/models/models';

export const loadUser = createAction(
  '[User] Load User',
);

export const loginUser = createAction(
  '[User] Login User',
  props<{ credentials: LoginUserModel }>()
);

export const loadUserSuccess = createAction(
  '[User] Load User Success',
  props<{ userData: UserModel }>()
);

export const loadUserError = createAction(
  '[User] Load User Error',
  props<{ error: string }>()
);
