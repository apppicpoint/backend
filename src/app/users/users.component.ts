import { Component, OnInit } from '@angular/core';
import {User} from '../interfaces/users';
import {UsersService} from '../services/users.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];

  constructor(private userServices: UsersService, private router: Router) {
    userServices.get().subscribe( (data: [User]) => {
     this.users = data['users'];
    }, (error) => {
      console.log('error para variar');
      alert(error['error'].message);
    });
  }

  ngOnInit() {
  }

  changeBannedState(user) {
    this.userServices.changeBannedState(user).subscribe( (data) => {
      location.reload();
    }, (error) => {
      console.log('error para variar');
      alert(error['error'].message);
    });  }

}
