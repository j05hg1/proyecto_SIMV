
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';


import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AuthGuard } from './auth/guards/auth.guard';




const rutas: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },  
  
  {
    path: 'usuarios',
    loadChildren: () => import('./usuarios/usuarios.module').then(m => m.UsuariosModule),
    //primero debe autenticar, de lo contrario no dejará ingresar a otra ruta
    // canLoad: [ AuthGuard ],
    // canActivate: [ AuthGuard ]
  },
  
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
  
]


@NgModule({
  imports: [
    RouterModule.forRoot(rutas),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
