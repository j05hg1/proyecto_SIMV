// Componente
import { LoginComponent } from './pages/login/login.component';
import { CrearComponent } from './pages/crear/crear.component';

// Modulos
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InicioComponent } from './pages/dashboard/inicio/inicio.component';



@NgModule({
  declarations: [
    LoginComponent,
    CrearComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class AuthModule { }
