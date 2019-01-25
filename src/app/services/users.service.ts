import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {// 192.168.6.162
  API_ENDPOINT = 'http://192.168.6.162/api/public/index.php/api/users';
  token = localStorage.getItem('token');
  headers = new HttpHeaders(
    {
      'Content-Type': 'application/json',
      'Authorization': this.token,
    });
  constructor(private httpClient: HttpClient) {}
  // Obtiene todos los objetos de la base de datos
  get() {
    return this.httpClient.get(this.API_ENDPOINT, {headers: this.headers});
  }
  // Obtiene un objeto de la base de datos
  getUser(user) {
    return this.httpClient.get(this.API_ENDPOINT + '/' + user, {headers: this.headers});
  }
  // Modifica un objeto de la base de datos
  modify(user: User) {
    return this.httpClient.put(this.API_ENDPOINT + '/' + user.id, user, {headers: this.headers});
  }

  // Bloquea un usuario
  changeBannedState(user) {
    return this.httpClient.put(this.API_ENDPOINT + '/changeBannedState/' + user, {headers: this.headers});
  }
}
