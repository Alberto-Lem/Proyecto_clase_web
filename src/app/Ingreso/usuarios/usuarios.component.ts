import { Component, Input} from '@angular/core';
import { Login } from '../interface/ingreso.interface';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
})
export class UsuariosComponent{
  @Input() usuarios:Login[]=[]

}
