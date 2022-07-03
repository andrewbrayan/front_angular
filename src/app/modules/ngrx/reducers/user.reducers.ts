import { createReducer, on } from '@ngrx/store';
import { loadUser } from '@modules/ngrx/actions/user.actions';
import { UserState } from '@modules/ngrx/models/user.state';

export const initialState: UserState = { user: {}, loading: false };

export const userReducer = createReducer(
  initialState,
  on(loadUser, (state) => {
    return { ...state, loading: true };
  })
);
