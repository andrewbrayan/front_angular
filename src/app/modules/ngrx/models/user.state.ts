import { UserModel } from '@shared/models/models';

export interface UserState {
  user: Readonly<UserModel>;
  loading: boolean;
}
