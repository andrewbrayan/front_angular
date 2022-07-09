import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { UserState } from '../models/user.state';

export const selectUser = (state: AppState) => state.userDB;

export const selectUserData = createSelector(
  selectUser,
  (state: UserState) => state.userData
);

export const selectLoading = createSelector(
  selectUser,
  (state: UserState) => state.loading
);

export const selectError = createSelector(
  selectUser,
  (state: UserState) => state.error
);
