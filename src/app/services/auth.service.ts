import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_ENDPOINT = 'http://192.168.6.162/api/public/index.php/api/';
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

  recoveryPassword(user: User) {
    const headers = new HttpHeaders(
      {
        'Content-Type': 'application/json'
      });
    return this.httpClient.post(this.API_ENDPOINT + 'forgotPass', user,  {headers: headers});

  }


}
