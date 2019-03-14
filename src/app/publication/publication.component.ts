import { Component, OnInit } from '@angular/core';
import {Publication} from '../interfaces/Publication';
import {AuthService} from '../services/auth.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SpotsService} from '../services/spots.service';
import {PublicationService} from '../services/publication.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.component.html',
  styleUrls: ['./publication.component.css']
})
export class PublicationComponent implements OnInit {

  id: any; // id del objeto que se vaya a modificar cuando se esté en modo edición
  editing = false; // Activa/desactiva el modo edición

  // Crea un spot con todos los parametros vacios para rellenarlo desde html
  publication: Publication = {
    description: null,
    user_id: null,
    media: null,
    spot_id: null,
  };

  // Constructor de la clase. Hay que pasar como parametro todos los componentes de angular que se vayan a utilizar.
  // Importante poner "private".

  constructor(private authService: AuthService, private  router: Router, private activatedRoute: ActivatedRoute,
              private publicationService: PublicationService) {
    this.id = activatedRoute.snapshot.params['publication']; // Obtiene el id pasado en la ruta. Ej .../api/spots/7
    this.editing = !!this.id;
    if (this.id) { // Rellena los campos del html con los datos del objeto obtenidos de la db
      publicationService.getPublicationt(this.id).subscribe( (data) => {
        this.publication = data['spot'];
      }, (error) => {
        console.log('error para variar');
        alert(error['error'].message);
      });
    }
  }

  ngOnInit() {
  }

  register() {
    console.log(this.publication);
    this.publicationService.register(this.publication).subscribe( (data) => {
      this.router.navigate(['/publications']);
    }, (error) => {
      console.log('error para variar');
      alert(error['error'].message);
    });
  }
  modify() {
    console.log(this.publication);
    this.publicationService.modify(this.publication).subscribe( (data) => {
      this.router.navigate(['/publications']);
    }, (error) => {
      console.log('error para variar');
      alert(error['error'].message);
    });
  }

}
