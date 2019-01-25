import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Spot} from '../interfaces/spot';

const token = localStorage.getItem('token');
const API_ENDPOINT = 'http://192.168.6.162/api/public/index.php/api/spots';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': token
  })
};

@Injectable({
  providedIn: 'root'
})
export class SpotsService {





  constructor(private httpClient: HttpClient) {}
  // Obtiene todos los objetos de la base de datos
  get() {
    console.log(httpOptions.headers);
    return this.httpClient.get(API_ENDPOINT, httpOptions);
  }
  // Obtiene un objeto de la base de datos
  getSpot(spot) {
    return this.httpClient.get(API_ENDPOINT + '/' + spot, httpOptions);
  }

  // Modifica un objeto de la base de datos
  modify(spot: Spot) {
    return this.httpClient.put(API_ENDPOINT + '/' + spot.id, spot, httpOptions);
  }
  // Registra un objeto de la base de datos
  register(spot: Spot) {
    return this.httpClient.post(API_ENDPOINT, spot, httpOptions);
  }

  // Borra un objeto de la base de datos
  delete(spot) {
    return this.httpClient.delete(API_ENDPOINT + '/' + spot, httpOptions);
  }
}
