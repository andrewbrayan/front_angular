import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { UserState } from '../models/user.state';

export const selectUser = (state: AppState) => state.user;

export const selectUserData = createSelector(
  selectUser,
  (state: UserState) => state.user
);

export const selectLoading = createSelector(
  selectUser,
  (state: UserState) => state.loading
);
