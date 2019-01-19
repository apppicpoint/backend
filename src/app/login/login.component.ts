import { Component, OnInit } from '@angular/core';
import {User} from '../interfaces/user';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  user: User = {
    email: null,
    password: null
  };
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  get f() { return this.loginForm.controls; }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.login(this.user).subscribe( (data) => {
      console.log(data['token']);
      console.log(data['role_id']);
      if (data['role_id'] === 1) {
        localStorage.setItem('token', data['token']);
        this.router.navigate(['/users']);
      } else {
        alert('you don\'t have permissions');
      }

    }, (error) => {
      console.log(error['error'].message);
      alert(error['error'].message);
    });
  }

}
