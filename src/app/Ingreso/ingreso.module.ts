import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ContraseniaComponent } from './contrasenia/contrasenia.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
interface{
  usuario:String,
  contraseña:String
}
@NgModule({
    declarations: [
        ContraseniaComponent,
        LoginComponent,
        RegistroComponent
      ],
      exports: [
        ContraseniaComponent,
        LoginComponent,
        RegistroComponent
      ],
      imports: [
        CommonModule
      ],
      providers: [],
      bootstrap: []
})


export class IngresoModule{

}