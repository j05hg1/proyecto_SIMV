import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NgForm, FormControl, FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formularioLogin!: FormGroup;
  submitted = false;

  styleImage = '';

  loading = false;

  constructor(private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    //validacion de correo y contraseña en Log In
    this.formularioLogin = this.fb.group({
      correo: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
    // this.buildForm();
  }

  get formularioControl() { return this.formularioLogin.controls; }


  login() {
    // login(event: Event): any {
    // Ir al backend
    // un usuario
    this.submitted = true;
    if (this.formularioLogin.value.correo && this.formularioLogin.value.password) {
            
      // event.preventDefault();
      const value = this.formularioLogin.value;
      //Valida recepcion de datos en formulario
      if (this.formularioLogin.valid) {      
      console.log(this.formularioLogin.value);
      console.log(`'%c'USER: ${value.correo} - PASSWORD: ${value.password}`, 'background: #222; color: #bada55');
      }

      this.authService.login(value.correo, value.password)
        .pipe(first())
        .subscribe(
          resp => {
            // console.log(resp);
            console.log(`'%c'CORREO: ${value.correo} - PASSWORD: ${value.password}`, 'background: #222; color: #bada55');
            // this.router.navigate(['./usuarios']);
            if (resp['status'] == 200) { //valida el formulario
              // console.log(resp['status']);
              console.log(resp);
              //Cargamos el Spinner y Redireccionamos al dashboard
              this.fakeloading();
              this.router.navigate(['./usuarios']);
            } else {
              //Mostramos un mensaje de error y reiniciamos formulario
              this.error();
              this.formularioLogin.reset();
            }
          });
      //this.router.navigate(['./dashboard']);
    }
  }

  logout() {
    this.authService.nombreUsuario = undefined;
    // this.authService.deleteToken();
    localStorage.clear();
  }

  unsplashClass(): any {
    return {
      'min-height': '100%',
      /* LLAMADA RANDOMICA AL SERVICIO DE IMAGENES DE UNSPLASH - CON IMAGENES DE TAMAÑO 1200X900 */
      /*SE LE AÑADE LA VARIABLE DE styleUrls PARA ESTABLECER LA TEMATICA*/
      background: `url("../../../assets/img/medimascotasLogin.png") no-repeat center center`,
      'background-size': 'cover',
      position: 'relative',
    };
  }

  error() {
    this._snackBar.open('Correo o contraseña ingresado son invalidos', 'Cerrar', {
      duration: 5000,
      horizontalPosition: 'start',
      verticalPosition: 'bottom'
    })
  }

  fakeloading() {
    this.loading = true;
    setTimeout(() => {
      // Redireccionamos al dashboard
      this.router.navigate(['./usuarios']);
    }, 1500);
  }

}
