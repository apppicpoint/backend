import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {User} from '../interfaces/user';
import {Router} from '@angular/router';
import {AuthService} from '../services/auth.service';

class AuthSe {
}

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css']
})
export class RecoveryComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  user: User = {
    email: null
  };
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) { }

  get f() { return this.loginForm.controls; }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  recoveryPassword() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.authService.recoveryPassword(this.user).subscribe( (data) => {
      alert('Email sent');
      this.router.navigate(['/login']);
    }, (error) => {
      console.log(error['error'].message);
      alert(error['error'].message);
    });
  }

}
