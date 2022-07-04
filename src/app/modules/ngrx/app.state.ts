import { ActionReducerMap } from '@ngrx/store';
import { UserState } from '@modules/ngrx/models/user.state';
import { userReducer } from './reducers/user.reducers';

export interface AppState {
  userDB: UserState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  userDB: userReducer
};
