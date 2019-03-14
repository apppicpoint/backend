import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Spot} from '../interfaces/spot';
import {Publication} from '../interfaces/Publication';

const token = localStorage.getItem('token');

// const API_ENDPOINT = 'http://192.168.6.162/api/public/index.php/api/';
const API_ENDPOINT = 'http://localhost/api/public/index.php/api/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': token,
    'Acces-Control-Allow-Credentials': 'true',
  })
};

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  constructor(private httpClient: HttpClient) {}
  // Obtiene todos los objetos de la base de datos
  get() {
    console.log(httpOptions.headers);
    return this.httpClient.get(API_ENDPOINT + 'publications', httpOptions);
  }

  getLikes(publication) {
    console.log(httpOptions.headers);
    return this.httpClient.get(API_ENDPOINT + 'likesCount/' + publication, httpOptions);
  }
  // Obtiene un objeto de la base de datos
  getPublicationt(publication) {
    return this.httpClient.get(API_ENDPOINT + 'publications/' + publication, httpOptions);
  }

  // Modifica un objeto de la base de datos
  modify(publication: Publication) {
    return this.httpClient.put(API_ENDPOINT + '/' + publication.id, publication, httpOptions);
  }
  // Registra un objeto de la base de datos
  register(publication: Spot) {
    return this.httpClient.post(API_ENDPOINT + 'publications/', publication, httpOptions);
  }

  // Borra un objeto de la base de datos
  delete(publication) {
    return this.httpClient.delete(API_ENDPOINT + 'publications/' + publication, httpOptions);
  }
}
