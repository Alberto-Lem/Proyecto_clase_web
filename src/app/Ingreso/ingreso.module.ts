import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContraseniaComponent } from './contrasenia/contrasenia.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AgregarComponent } from './agregar/agregar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { IngresoService } from './service/ingreso.service';

@NgModule({
    declarations: [
        ContraseniaComponent,
        LoginComponent,
        RegistroComponent,
        AgregarComponent,
        UsuariosComponent
      ],
      exports: [
        ContraseniaComponent,
        LoginComponent,
        RegistroComponent
      ],
      imports: [
        CommonModule,
        FormsModule
      ],
      providers: [IngresoService],
      bootstrap: []
})


export class IngresoModule{

}