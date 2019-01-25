import { Component, OnInit } from '@angular/core';
import {Spot} from '../interfaces/spot';
import {SpotsService} from '../services/spots.service';

@Component({
  selector: 'app-spots',
  templateUrl: './spots.component.html',
  styleUrls: ['./spots.component.css']
})
export class SpotsComponent implements OnInit {

  spots: Spot[]; // Se declara un array vacio de spots

  constructor(private spotsService: SpotsService) {
    spotsService.get().subscribe( (data: [Spot]) => {
      this.spots = data['spots'];
      console.log(data['spots']);
    }, (error) => {
      console.log('error para variar');
      alert(error['error'].message);
    });
  }

  // Borra el spot

  delete(id) {
    this.spotsService.delete(id).subscribe( () => {
      location.reload();
    }, (error) => {
      console.log('error para variar');
      alert(error['error'].message);
    });
  }
  ngOnInit() {
  }

}
