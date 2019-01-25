import { Component, OnInit } from '@angular/core';
import {User} from '../interfaces/user';
import {UsersService} from '../services/users.service';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[]; // Se declara un array vacio de usuarios

  constructor(private userServices: UsersService) {
    userServices.get().subscribe( (data: [User]) => { // Se rellena el array con los usuarios que devuelve la api
     this.users = data['users'];
    }, (error) => {
      console.log('error para variar');
      alert(error['error'].message);
    });
  }

  ngOnInit() {
  }
// Modifica el estado del usuario
  changeBannedState(user) {
    this.userServices.changeBannedState(user).subscribe( (data) => {
      location.reload();
    }, (error) => {
      console.log('error para variar');
      alert(error['error'].message);
    });  }

}
