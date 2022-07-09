import { createReducer, on } from '@ngrx/store';
import { loadUser, loadUserError, loadUserSuccess } from '@modules/ngrx/actions/user.actions';
import { UserState } from '@modules/ngrx/models/user.state';

export const initialState: UserState = {
  loading: false,
  userData: {
    _id: '',
    name: '',
    surname: '',
    username: '',
    email: '',
    password: '',
    image: '',
    role: '',
  },
  error: '',
};

export const userReducer = createReducer(
  initialState,
  on(loadUser, (state: UserState) => {
    return { ...state, loading: true };
  }),
  on(loadUserSuccess, (state: UserState, {userData}) => {
    return { ...state, userData, loading: false };
  }),
  on(loadUserError, (state: UserState) => {
    return { ...state, error: 'COD001', loading: false };
  })
);
