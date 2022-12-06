import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    UsuariosComponent,
    
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
    
  ]
})
export class DashboardModule { }
