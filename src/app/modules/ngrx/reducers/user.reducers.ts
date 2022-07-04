import { createReducer, on } from '@ngrx/store';
import { loadUser } from '@modules/ngrx/actions/user.actions';
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
};

export const userReducer = createReducer(
  initialState,
  on(loadUser, (state: UserState) => {
    return { ...state, loading: true };
  })
);
