import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { TipoUsuario } from '../modelo/tipo-usuario';


@Injectable({
  providedIn: 'root'
})
export class TipoUsuarioService {

  public tipos_usuarios:Array<TipoUsuario>=[];

  constructor(private http: HttpClient) { }

  public getTipoUsuariosService(){
    //defino la url donde esta el servicio
    let  url ='http://localhost/simv/usuario/TipoUsuarioService.php';
       let header=new HttpHeaders();
       header.append('Content-Type','aplication/json')
       header.append('Access-Control-Allow-Origin','http://localhost');

       return this.http.get<TipoUsuario[]>(url,{headers:header});
 }

}
