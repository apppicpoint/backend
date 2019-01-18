import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../interfaces/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  API_ENDPOINT = 'http://localhost:8888/api/public/api/users';
  token = localStorage.getItem('token');
  headers = new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Authorization': this.token,
    });
  constructor(private httpClient: HttpClient) {}
  get() {
    return this.httpClient.get(this.API_ENDPOINT, {headers: this.headers});
  }
  getUser(user) {
    return this.httpClient.get(this.API_ENDPOINT + '/' + user, {headers: this.headers});
  }
  modify(user: User) {
    return this.httpClient.put(this.API_ENDPOINT + '/' + user.id, user, {headers: this.headers});
  }

  changeBannedState(user) {
    return this.httpClient.put(this.API_ENDPOINT + '/changeBannedState/' + user, {headers: this.headers});
  }
}
