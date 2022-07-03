import { UserState } from '@modules/ngrx/models/user.state';
import { ActionReducerMap } from '@ngrx/store';
import { userReducer } from './reducers/user.reducers';

export interface AppState {
  user: UserState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  user: userReducer
};
