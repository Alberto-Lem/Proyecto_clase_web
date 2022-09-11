import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Login } from '../interface/ingreso.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  @Input() login: Login = {
    usuario: '',
    password: ''
  }
  @Output() onNewUser: EventEmitter<Login> = new EventEmitter();
  ingresar() {
    if (this.login.usuario.trim().length === 0) {
      return;
    }
    console.log(this.login);
    this.onNewUser.emit(this.login)
    this.login = {
      usuario:'',
      password:''
    }
  }
}
