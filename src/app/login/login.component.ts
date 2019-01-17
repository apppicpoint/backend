import { Component, OnInit } from '@angular/core';
import {User} from '../interfaces/users';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User = {
    email: null,
    password: null
  };
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  login() {
    this.authService.login(this.user).subscribe( (data) => {
      localStorage.setItem('token', data['token']);
      console.log(data['token']);
      this.router.navigate(['/users']);
    }, (error) => {
      console.log('error para variar');
    });
  }

}
