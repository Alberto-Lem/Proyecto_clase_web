import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PerfilComponent } from './perfil/perfil.component';



@NgModule({
  declarations: [
    DashboardComponent,
    PerfilComponent
  ],
  exports: [
    DashboardComponent,
    PerfilComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
