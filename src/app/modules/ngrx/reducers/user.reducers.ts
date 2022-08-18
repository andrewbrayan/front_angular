import { createReducer, on } from '@ngrx/store';
import { loadChatsUserError, loadChatsUserSuccess, loadUser, loadUserError, loadUserSuccess, loginUser, registerUser } from '@modules/ngrx/actions/user.actions';
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
  userChats: [],
};

export const userReducer = createReducer(
  initialState,
  on(loadUser, (state: UserState) => {
    return { ...state, loading: true };
  }),
  on(loginUser, (state: UserState) => {
    return { ...state, loading: true };
  }),
  on(registerUser, (state: UserState) => {
    return { ...state, loading: true };
  }),
  on(loadUserSuccess, (state: UserState, {userData}) => {
    return { ...state, userData, error: '',  loading: false };
  }),
  on(loadUserError, (state: UserState, {error}) => {
    return { ...state, error, loading: false };
  }),
  on(loadChatsUserSuccess, (state: UserState, {userChats}) => {
    return { ...state, userChats, loading: false };
  }),
  on(loadChatsUserError, (state: UserState, {error}) => {
    return { ...state, error, loading: false };
  }),
);
