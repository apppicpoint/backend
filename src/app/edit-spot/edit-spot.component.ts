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
  id: any;
  editing = false;

  spot: Spot = {
    name: null,
    longitude: null,
    latitude: null,
    user_id: null,
    description: null,
    city: null,
    country: null,
  };
  constructor(private authService: AuthService, private  router: Router, private activatedRoute: ActivatedRoute,
              private spotService: SpotsService) {
    this.id = activatedRoute.snapshot.params['spot'];
    this.editing = !!this.id;
    if (this.id) {
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
  register() {
    console.log(this.spot);
    this.spotService.register(this.spot).subscribe( (data) => {
      this.router.navigate(['/spots']);
    }, (error) => {
      console.log('error para variar');
      alert(error['error'].message);
    });
  }
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
