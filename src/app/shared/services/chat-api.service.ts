import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModel } from '@shared/models/models';
import { map, Observable } from 'rxjs';

const uri = 'https://bam-chat.herokuapp.com/api';

@Injectable({
  providedIn: 'root',
})
export class ChatAPIService {
  httpOptions: { headers: HttpHeaders } = { headers: new HttpHeaders() };

  constructor(private httpClient: HttpClient) {}

  getToken(credentials?: { username: string; password: string }) {
    if (localStorage.getItem('token')) {
      let token = localStorage.getItem('token');
      this.httpOptions.headers.set('Authorization', `${token}`);
    } else {
      this.httpClient
        .post(`${uri}/login`, {
          ...credentials,
          getToken: true,
        })
        .subscribe((result: any) => {
          localStorage.setItem('token', result.token);
          this.httpOptions.headers.set('Authorization', `${result.token}`);
        });
    }
  }

  getUser(id?: string): Observable<UserModel> {
    return this.httpClient.get<UserModel>(
      `${uri}/getUser${id ? `/${id}` : ''}`,
      this.httpOptions
    );
  }
}
