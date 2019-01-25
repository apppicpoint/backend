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
  id: any; // id del objeto que se vaya a modificar cuando se esté en modo edición
  editing = false; // Activa/desactiva el modo edición

  // Crea un usuario con todos los parametros vacios para rellenarlo desde html
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

  // Constructor de la clase. Hay que pasar como parametro todos los componentes de angular que se vayan a utilizar. Importante poner
  // "private".
  constructor(private authService: AuthService, private  router: Router, private activatedRoute: ActivatedRoute,
              private userService: UsersService) {
    this.id = activatedRoute.snapshot.params['user']; // Obtiene el id pasado en la ruta. Ej .../api/users/7
    this.editing = !!this.id; // Activa el modo edición cuando el id no sea null
    if (this.id) { // Rellena los campos del html con los datos del objeto obtenidos de la db
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
  // Registra un nuevo usuario
  register() {
    console.log(this.user);
    this.authService.register(this.user).subscribe( (data) => { // Hace una peticion post declarada en AuthService.
      console.log(data['token']);
      this.router.navigate(['/users']); // Una vez registrado vuelve a la pagina de usuarios
      }, (error) => {
      console.log('error para variar');
      alert(error['error'].message);
    });
  }
  // modifica un usuario
  modify() {
    console.log(this.user);
     this.userService.modify(this.user).subscribe( (data) => {// Hace una peticion put declarada en AuthService.
      this.router.navigate(['/users']);
    }, (error) => {
      console.log('error para variar');
      alert(error['error'].message);
    });
  }

}
