import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '@shared/models/models';
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

  login(credentials?: {
    email: String;
    password: String;
  }): Observable<{ message: string; token: string }> {
    return this.httpClient.post<{ message: string; token: string }>(
      `${url}/login`,
      {
        ...credentials,
        getToken: true,
      }
    );
  }

  register(credentials?: {
    username: String;
    email: String;
    password: String;
  }): Observable<{ message: string; token: string }> {
    return this.httpClient.post<{ message: string; token: string }>(
      `${url}/login`,
      {
        ...credentials,
        getToken: true,
      }
    );
  }

  getUser(id?: string): Observable<UserModel> {
    return this.httpClient.get<UserModel>(
      `${url}/getUser${id ? `/${id}` : ''}`,
      this.httpOptions
    );
  }

  getUsers(): Observable<UserModel[]> {
    return this.httpClient.get<UserModel[]>(`${url}/getUsers`, this.httpOptions);
  }

}
