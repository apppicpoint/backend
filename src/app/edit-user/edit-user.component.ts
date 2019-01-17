import { Component, OnInit } from '@angular/core';
import {User} from '../interfaces/users';
import {UsersService} from '../services/users.service';


@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private usersService: UsersService) { }
  user: User = {
    name: null,
    nickName: null,
    email: null,
    password: null,
    biography: null,
    telephone: null,
    photo: null,
    role_id: null,
  };
  ngOnInit() {
  }
  modify() {
    console.log(this.user);
    this.usersService.modify(this.user).subscribe( (data) => {
      console.log(data['token']);
    }, (error) => {
      console.log('error para variar');
    });
  }

}
