import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Spot} from '../interfaces/spot';
import {SpotsService} from '../services/spots.service';

@Component({
  selector: 'app-edit-spot',
  templateUrl: './edit-spot.component.html',
  styleUrls: ['./edit-spot.component.css']
})
export class EditSpotComponent implements OnInit {
  id: any; // id del objeto que se vaya a modificar cuando se esté en modo edición
  editing = false; // Activa/desactiva el modo edición

  // Crea un spot con todos los parametros vacios para rellenarlo desde html
  spot: Spot = {
    name: null,
    longitude: null,
    latitude: null,
    user_id: null,
    description: null,
    city: null,
    country: null,
  };

  // Constructor de la clase. Hay que pasar como parametro todos los componentes de angular que se vayan a utilizar.
  // Importante poner "private".

  constructor(private authService: AuthService, private  router: Router, private activatedRoute: ActivatedRoute,
              private spotService: SpotsService) {
    this.id = activatedRoute.snapshot.params['spot']; // Obtiene el id pasado en la ruta. Ej .../api/spots/7
    this.editing = !!this.id;
    if (this.id) { // Rellena los campos del html con los datos del objeto obtenidos de la db
      spotService.getSpot(this.id).subscribe( (data) => {
        this.spot = data['spot'];
      }, (error) => {
        console.log('error para variar');
        alert(error['error'].message);
      });
    }
  }

  ngOnInit() {
  }
  // Registra un nuevo spot

  register() {
    console.log(this.spot);
    this.spotService.register(this.spot).subscribe( (data) => {
      this.router.navigate(['/spots']);
    }, (error) => {
      console.log('error para variar');
      alert(error['error'].message);
    });
  }
  // Modifica un spot
  modify() {
    console.log(this.spot);
    this.spotService.modify(this.spot).subscribe( (data) => {
      this.router.navigate(['/spots']);
    }, (error) => {
      console.log('error para variar');
      alert(error['error'].message);
    });
  }

}
