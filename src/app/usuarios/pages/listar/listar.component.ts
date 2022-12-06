import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../modelo/usuario';
import { UsuarioService } from '../../servicios/usuario.service';
import { TipoIdentificacionService } from '../../../servicios/tipo-identificacion.service';
import { TipoIdentificacion } from 'src/app/modelo/tipo-identificacion';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  usuarios:Usuario[] = [];
  tipo_identificaciones:TipoIdentificacion[]=[];
  columnas : any[] = ['Codigo','Primer Nombre','Segundo Nombre','apellido1','apellido2','direccion','celular','editar'];



  constructor(private usuarioService : UsuarioService, private identificacionesService:TipoIdentificacionService) { }

  ngOnInit(): void {

    this.usuarioService.getUsuariosService().subscribe(
      resp=>{
        console.log(resp);
        this.usuarios = resp;
      }
    );


  }

  eliminar(usuario:Usuario){
    if(confirm("¿Seguro que desea eliminar este usuario?")){
      
      this.usuarioService.eliminarUsuario(usuario).subscribe(resp=>{
        
        console.log(resp);
        

      });
      this.ngOnInit();
    }
    
  }

}
