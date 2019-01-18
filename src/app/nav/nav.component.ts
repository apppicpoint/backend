import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  error: string;
  constructor(router: Router) {
    if (!localStorage.getItem('token')) {
      router.navigate(['/login']);
    }}

  ngOnInit() {
  }
  logout() {
    localStorage.removeItem('token');
  }


}
