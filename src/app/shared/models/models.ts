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
