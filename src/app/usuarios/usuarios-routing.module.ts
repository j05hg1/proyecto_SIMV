import { NgModule, Component } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { CrearComponent } from './pages/crear/crear.component';
import { ListarComponent } from './pages/listar/listar.component';



const rutas: Routes = [

  {
    path: '',
    component: InicioComponent,
    children: [
      {
        path:'inicio',
        component: InicioComponent
      },
      {
        path: 'crear',
        component: CrearComponent
      },
      {
        path : 'listar',
      component: ListarComponent
      },
    {
      path: '**',
      redirectTo: 'inicio'
    }
  ]

  }

]

@NgModule({
  imports: [
    RouterModule.forChild(rutas)
  ],
  exports: [
    RouterModule
  ]
})
export class UsuariosRoutingModule { }
