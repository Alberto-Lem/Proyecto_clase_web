import { createInjectableType } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Login } from "../interface/ingreso.interface";
@Injectable()
export class IngresoService{
    usuariosS:Login[]=[
        {
            usuario:'prueba1',
            password:'prueba1'
        },
        {
            usuario:'prueba22',
            password:'prueba22'
        }
    ]
    constructor(){
        console.log('Servicio de Ingreso');
    }
    
}