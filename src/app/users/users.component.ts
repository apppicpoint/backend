import { Component, OnInit } from '@angular/core';
import {User} from '../interfaces/users';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private userServices: UsersService) {
    userServices.get().subscribe( (data: [User]) => {
     this.users = data['users'];
    }, (error) => {
      console.log('error para variar');
    });
  }

  ngOnInit() {
  }

}
