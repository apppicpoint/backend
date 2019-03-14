import { Component, OnInit } from '@angular/core';
import {Spot} from '../interfaces/spot';
import {SpotsService} from '../services/spots.service';
import {Publication} from '../interfaces/Publication';
import {PublicationService} from '../services/publication.service';
import {forEach} from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.css']
})
export class PublicationsComponent implements OnInit {

  publications: Publication[];

  constructor(private publicationService: PublicationService) {
    publicationService.get().subscribe( (data: [Publication]) => {
      this.publications = data['publications'];
      console.log(data['publications']);
    }, (error) => {
      console.log('error para variar');
      alert(error['error'].message);
    });

    publicationService.getLikes(2).subscribe( (data: [Int8Array]) => {
      this.publications = data['publications'];
      console.log(data['publications']);
    }, (error) => {
      console.log('error para variar');
      alert(error['error'].message);
    });
  }


  delete(id) {
    this.publicationService.delete(id).subscribe( () => {
      location.reload();
    }, (error) => {
      console.log('error para variar');
      alert(error['error'].message);
    });
  }
  ngOnInit() {
  }

}
