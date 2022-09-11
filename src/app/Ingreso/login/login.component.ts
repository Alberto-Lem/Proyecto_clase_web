import { Component} from '@angular/core';
import { Login } from '../interface/ingreso.interface';
import { IngresoService } from '../service/ingreso.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
 /*  usuarios:Login[]=[
    {
      usuario:'prueba1',
      password:'prueba1'
    },
    {
      usuario:'prueba2',
      password:'prueba2'
    }
  ]  */

/*   login:Login = {
    usuario:'Alberto',
    password:'Lemxona'
  } */
    /* ingresar(){
        console.log('prueba de boton');
        this.usuarios.push(this.login);
        this.login={
          usuario:'',
          password:''
        }
    } */
    usuarios:Login[]=[]

    agregarNuevousuario(argument:Login){
      this.usuarios.push(argument);
    }
    constructor(private ingresoServ:IngresoService){
      this.usuarios=this.ingresoServ.usuariosS;
    }
    
}
