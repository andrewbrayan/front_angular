import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChatModel, LoginUserModel, RegisterUserModel, UserModel } from '@shared/models/models';
import { Observable } from 'rxjs';

const url = 'https://bam-chat.herokuapp.com/api';


@Injectable({
  providedIn: 'root',
})
export class ChatAPIService {
  httpOptions: { headers: HttpHeaders };
  token: string;

  constructor(private httpClient: HttpClient) {
    this.token = localStorage.getItem('token') || 'NoToken';

    this.httpOptions = {
      headers: new HttpHeaders().set('Authorization', this.token),
    };
  }

  setToken(token: string): void {
    this.httpOptions = {
      headers: new HttpHeaders().set('Authorization', token),
    };
  }

  login(credentials?: LoginUserModel): Observable<{ message: string; token: string }> {
    return this.httpClient.post<{ message: string; token: string }>(`${url}/login`, {  ...credentials, getToken: true });
  }

  register(credentials?: RegisterUserModel): Observable<{ message: string; user: string }> {
    return this.httpClient.post<{ message: string; user: string }>(`${url}/register`, {...credentials});
  }

  getUser(id?: string): Observable<UserModel> {
    return this.httpClient.get<UserModel>(`${url}/getUser${id ? `/${id}` : ''}`, this.httpOptions );
  }

  getUsers(): Observable<UserModel[]> {
    return this.httpClient.get<UserModel[]>(`${url}/getUsers`, this.httpOptions);
  }

  getChats(): Observable<[ChatModel]> {
    return this.httpClient.get<[ChatModel]>(`${url}/getChats`, this.httpOptions);
  }

  uploadAvatar(formData: FormData): Observable<{ message: string; user: UserModel }> {
    return this.httpClient.post<{ message: string; user: UserModel }>(`${url}/upload-avatar`, formData, this.httpOptions);
  }

  uploadUser(params: {name: string, surname: string}): Observable<{ message: string; user: UserModel }> {
    return this.httpClient.put<{ message: string; user: UserModel }>(`${url}/update`, params, this.httpOptions);
  }
}
