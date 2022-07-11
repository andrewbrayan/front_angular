import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '@shared/models/models';
import { map, Observable } from 'rxjs';

const url = 'https://bam-chat.herokuapp.com/api';

@Injectable({
  providedIn: 'root',
})
export class ChatAPIService {
  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders().set(
      'Authorization',
      localStorage.getItem('token') || ''
    ),
  };

  constructor(private httpClient: HttpClient) {}

  getToken(credentials?: {
    email: String;
    password: String;
  }): Observable<String> {
    return this.httpClient.post<String>(`${url}/login`, {
      ...credentials,
      getToken: true,
    });
  }

  getUser(id?: string): Observable<UserModel> {
    return this.httpClient.get<UserModel>(
      `${url}/getUser${id ? `/${id}` : ''}`,
      this.httpOptions
    );
  }
}
