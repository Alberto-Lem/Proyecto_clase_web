import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent {
  nombre: string = 'IronMan'
  edad: number = 40

  obtenerNombre(): String {
    return `${this.nombre} - ${this.edad}`;
  }


  get nombreM(): String {
    return this.nombre.toUpperCase();
  }
  cambiarNombre():void{
    this.nombre = 'Spiderman';
  }
}