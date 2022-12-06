import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuariosRoutingModule } from './usuarios-routing.module';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms'

import { CrearComponent } from './pages/crear/crear.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HttpClientModule } from '@angular/common/http';
import { ListarComponent } from './pages/listar/listar.component';
import { FlexLayoutModule } from '@angular/flex-layout';




@NgModule({
  declarations: [
    CrearComponent,
    BuscarComponent,
    InicioComponent,
    ListarComponent
  ],
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule
  
  ],
  exports:[
    ListarComponent
  ]
})
export class UsuariosModule { }
