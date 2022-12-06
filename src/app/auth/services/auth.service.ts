import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Auth, AuthResponse } from '../interfaces/auth.interface';
import { catchError, map, tap } from 'rxjs/operators'
import { Observable, of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //private baseUrl: string = environment.baseUrl;
  nombreUsuario: Auth | undefined;
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  get auth(): Auth { //: Auth
    return { ...this.nombreUsuario! }//...this.nombreUsuario!
  }

  constructor(private http: HttpClient) { }

  login(correo: string, password: string) {
    // let url = `${this.baseUrl}/usuario/UsuarioService.php`;
    let body = { correo, password };
    // return this.http.post(url,body);
    let url = 'http://localhost/simv/usuario/LoginService.php/?correo=' + correo + '&password=' + password;
    let header = new HttpHeaders();
    header.append('Content-Type', 'aplication/json')
    // header.append('Access-Control-Allow-Methods', '"POST, GET, DELETE, PUT"')
    header.append('Access-Control-Allow-Origin', 'http://localhost');
    //return this.http.get<Auth[]>(url, { headers: header })
    return this.http.get<Auth>(url, { headers: header })
    .pipe(
      map(auth => {
        this.nombreUsuario = auth;
        return true;
      })
    );

  }

  verificaAutenticacion(): Observable<boolean> {
    if (!localStorage.getItem('token')) {
      return of(false);
    }

    let url = 'http://localhost/simv/usuario/LoginService.php';
    let header = new HttpHeaders();
    header.append('Content-Type', 'aplication/json')
    header.append('Access-Control-Allow-Methods', '"POST, GET, DELETE, PUT"')
    header.append('Access-Control-Allow-Origin', 'http://localhost');
    return this.http.get<Auth>(url, { headers: header })
      // return this.http.get<Auth>(`${this.baseUrl}/usuarios/1`)
      .pipe(
        map(auth => {
          this.nombreUsuario = auth;
          return true;
        })
      );
  }

  //Token
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
  }
  isLoggedIn() {
    const userToken = this.getToken();
    if (userToken != null) {
      return true;
    } else {
      return false;
    }
  }




}
