import { Injectable } from '@angular/core';
import { TipoIdentificacion } from '../modelo/tipo-identificacion';
import { HttpClient,HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TipoIdentificacionService {

  public tipos_identificaciones:Array<TipoIdentificacion>=[];

  constructor(private http: HttpClient) { }

  public getTipoIdentificacionService(){
    //defino la url donde esta el servicio
    let  url ='http://localhost/simv/usuario/TipoIdentificacionService.php';
       let header=new HttpHeaders();
       header.append('Content-Type','aplication/json')
       header.append('Access-Control-Allow-Origin','http://localhost');

       return this.http.get<TipoIdentificacion[]>(url,{headers:header});
 }

 public getNombreIdentificacion(id:number){
  //defino la url donde esta el servicio
  let  url ='http://localhost/simv/usuario/TipoIdentificacionService.php?='+id;
     let header=new HttpHeaders();
     header.append('Content-Type','aplication/json')
     header.append('Access-Control-Allow-Origin','http://localhost');

     return this.http.get<TipoIdentificacion[]>(url,{headers:header});
}



}
