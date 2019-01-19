import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {User} from '../interfaces/user';
import {ActivatedRoute, Router} from '@angular/router';
import {UsersService} from '../services/users.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  id: any;
  editing = false;

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
  constructor(private authService: AuthService, private  router: Router, private activatedRoute: ActivatedRoute,
              private userService: UsersService) {
    this.id = activatedRoute.snapshot.params['user'];
    this.editing = !!this.id;
    if (this.id) {
      userService.getUser(this.id).subscribe( (data) => {
        this.user = data['user'];
      }, (error) => {
        console.log('error para variar');
        alert(error['error'].message);
      });
    }
  }

  ngOnInit() {
  }
  register() {
    console.log(this.user);
    this.authService.register(this.user).subscribe( (data) => {
      console.log(data['token']);
      this.router.navigate(['/users']);
      }, (error) => {
      console.log('error para variar');
      alert(error['error'].message);
    });
  }
  modify() {
    console.log(this.user);
     this.userService.modify(this.user).subscribe( (data) => {
      this.router.navigate(['/users']);
    }, (error) => {
      console.log('error para variar');
      alert(error['error'].message);
    });
  }

}
