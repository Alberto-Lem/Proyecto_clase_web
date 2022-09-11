import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContadorComponent } from './Contador/Contador.component';
import { HeroesComponent } from './heroes/heroes/heroes.component';
import { ListadoComponent } from './heroes/listado/listado.component';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './Contador/Contador.module';
import { IngresoModule } from './Ingreso/ingreso.module';
import { HomeModule } from './home/home.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    ContadorModule,
    HeroesModule,
    IngresoModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  
}
