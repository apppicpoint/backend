import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_ENDPOINT = 'http://localhost:8888/api/public/api/';
  constructor(private httpClient: HttpClient) {
  }
  token = localStorage.getItem('token');

  register(user: User) {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json'
      });
    return this.httpClient.post(this.API_ENDPOINT + 'register', user, {headers: headers});
  }

  login(user: User) {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json'
      });
    return this.httpClient.post(this.API_ENDPOINT + 'login', user, {headers: headers});
  }


}
