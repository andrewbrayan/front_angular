export interface UserModel {
  _id: String;
  name: String;
  surname: String;
  username: String;
  email: String;
  password: String;
  image: String;
  role: String;
}

export interface ChatModel {
  _id: String,
  users: [String],
  messages: [any],
  createdAt: String,
  type: String,
}

export interface LoginUserModel {
  email: String;
  password: String;
}

export interface RegisterUserModel {
  username: String;
  email: String;
  password: String;
}

export interface ItemSearchUserList {
  username: String;
  name: String;
  surname: String;
}
