import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../modelo/usuario';
//import { LoginComponent } from '../../auth/pages/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  public getUsuariosService() {
    //defino la url donde esta el servicio
    let url = 'http://localhost/simv/usuario/UsuarioService.php';
    let header = new HttpHeaders();
    header.append('Content-Type', 'aplication/json')
    header.append('Access-Control-Allow-Origin', 'http://localhost');

    return this.http.get<Usuario[]>(url, { headers: header });
  }


  public registrarUsuario(usuario: Usuario) {
    //defino la url donde esta el servicio
    let url = 'http://localhost/simv/usuario/UsuarioService.php';
    let header = new HttpHeaders();
    header.append('Content-Type', 'aplication/json')
    header.append('Access-Control-Allow-Methods', '"POST, GET,DELETE,PUT"')
    header.append('Access-Control-Allow-Origin', 'http://localhost');
    return this.http.post(url, JSON.stringify(usuario), { headers: header });
  }

  public getUsuario(usuario: Usuario) {
    //defino la url donde esta el servicio
    let url = 'http://localhost/simv/usuario/UsuarioService.php?param=' + usuario.id;
    let header = new HttpHeaders();
    header.append('Content-Type', 'aplication/json')
    header.append('Access-Control-Allow-Origin', 'http://localhost');

    return this.http.get<Usuario[]>(url, { headers: header });
  }

  public eliminarUsuario(usuario: Usuario) {

    //defino la url donde esta el servicio
    let url = 'http://localhost/simv/usuario/UsuarioService.php?param=' + usuario.id;
    let header = new HttpHeaders();
    header.append('Content-Type', 'aplication/json')
    header.append('Access-Control-Allow-Methods', '"POST, GET,DELETE,PUT"')
    header.append('Access-Control-Allow-Origin', 'http://localhost');
    return this.http.delete(url, { headers: header });
  }


}
