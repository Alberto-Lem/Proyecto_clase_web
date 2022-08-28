import { Component } from '@angular/core';
@Component({
    selector: 'app-contador',
    templateUrl: 'contador.component.html'
  
  
  })
export class ContadorComponent {
    title = 'Contador';
  numero:number=0;
  numero2:number=40;
  sumar():number{
  return this.numero2+=1;
}
restar():number{
  return this.numero2-=1;
} 
}