import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { InicioComponent } from './pages/dashboard/inicio/inicio.component';
//import { UsuariosComponent } from './pages/dashboard/usuarios/usuarios.component';
//inicio de carpeta usuarios externa
//import { InicioComponent } from '../usuarios/pages/inicio/inicio.component';



const rutas: Routes = [
  {
    path: '',
    children:[
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'inicio',
        component: InicioComponent
      },
      // {
      //   path: 'usuarios',
      //   component: UsuariosComponent
      // },
      /*
      {
        path: 'registro',
        component: LoginComponent
      },
      */
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  }

]
//forChild para cargar rutas de manera perezosa
@NgModule({  
  imports: [
    RouterModule.forChild(rutas)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule { }
