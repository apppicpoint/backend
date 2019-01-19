import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Spot} from '../interfaces/spot';

@Injectable({
  providedIn: 'root'
})
export class SpotsService {

  API_ENDPOINT = 'http://localhost:8888/api/public/api/spots';
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
  getSpot(spot) {
    return this.httpClient.get(this.API_ENDPOINT + '/' + spot, {headers: this.headers});
  }
  modify(spot: Spot) {
    return this.httpClient.put(this.API_ENDPOINT + '/' + spot.id, spot, {headers: this.headers});
  }
  register(spot: Spot) {
    return this.httpClient.post(this.API_ENDPOINT, spot, {headers: this.headers});
  }
  delete(spot) {
    return this.httpClient.delete(this.API_ENDPOINT + '/' + spot, {headers: this.headers});
  }
}
