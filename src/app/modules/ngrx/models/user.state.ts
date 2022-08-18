import { ChatModel, UserModel } from '@shared/models/models';

export interface UserState {
  loading: boolean;
  userData: Readonly<UserModel>;
  userChats: [ChatModel?];
  error: string;
}
