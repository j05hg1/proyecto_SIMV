import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TipoIdentificacion } from 'src/app/modelo/tipo-identificacion';
import { TipoUsuario } from 'src/app/modelo/tipo-usuario';
import { TipoIdentificacionService } from 'src/app/servicios/tipo-identificacion.service';
import { TipoUsuarioService } from 'src/app/servicios/tipo-usuario.service';
import { UsuarioService } from '../../servicios/usuario.service';
import { Usuario } from '../../modelo/usuario';


@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  tipo_identificaciones:TipoIdentificacion[]=[];
  tipo_usuarios:TipoUsuario[]=[];

  constructor(private usuarioService : UsuarioService, 
    private identificacionesService:TipoIdentificacionService,
    private tipoUsuarioService:TipoUsuarioService) { }



    usuario:Usuario = {
     
    id_tipo_usuario:0,
    id_identificacion:0,
    numero_identificacion:0,
    nombre1:'',
    nombre2:'',
    apellido1:'',
    apellido2:'',
    direccion:'',
    telefono:0,
    celular: '0',
    correo: '',
    pass:''


    }


  ngOnInit(): void {
    this.identificacionesService.getTipoIdentificacionService()
      .subscribe( tipo_identificaciones => this.tipo_identificaciones = tipo_identificaciones );
      this.tipoUsuarioService.getTipoUsuariosService()
      .subscribe( tipo_usuarios => this.tipo_usuarios = tipo_usuarios );

  }

  crear(){
    console.log(this.usuario.id_identificacion);
    this.usuarioService.registrarUsuario(this.usuario).subscribe(
      resp => {
        
        console.log("Creado",resp);
      }
    )
    
  }

  ids(){
    console.log("iddddd",this.usuario.id_identificacion);
  }


}
