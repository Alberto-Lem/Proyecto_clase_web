import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {
  heroes:string[]=['Spiderman','Ironman','Hulk','Thor'];
  heroeBorrado:string='';
  
  borrarHeroe(){
    //console.log('borrarndo...');
    this.heroeBorrado = this.heroes.shift()||'';
    //console.log(heroeBorrado);
  }


  //for(int i=0;i<ListadoComponent.lenght;i++)

}
