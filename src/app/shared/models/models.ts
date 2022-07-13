export interface UserModel {
  _id: string;
  name: String;
  surname: String;
  username: String;
  email: String;
  password: String;
  image: String;
  role: String;
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
