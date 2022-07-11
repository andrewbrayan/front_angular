import { createReducer, on } from '@ngrx/store';
import { loadUser, loadUserError, loadUserSuccess, loginUser } from '@modules/ngrx/actions/user.actions';
import { UserState } from '@modules/ngrx/models/user.state';

export const initialState: UserState = {
  loading: false,
  error: '',
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
};

export const userReducer = createReducer(
  initialState,
  on(loadUser, (state: UserState, {userToken}) => {
    return { ...state, loading: true };
  }),
  on(loginUser, (state: UserState, {credentials}) => {
    return { ...state, loading: true };
  }),
  on(loadUserSuccess, (state: UserState, {userData}) => {
    return { ...state, userData, loading: false };
  }),
  on(loadUserError, (state: UserState) => {
    return { ...state, error: 'COD001', loading: false };
  })
);
