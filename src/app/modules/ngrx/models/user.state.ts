import { UserModel } from '@shared/models/models';

export interface UserState {
  loading: boolean;
  userData: Readonly<UserModel>;
  error: string;
}
