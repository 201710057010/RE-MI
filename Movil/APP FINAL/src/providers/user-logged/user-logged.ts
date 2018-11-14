import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserProvider } from '../user/user';

@Injectable()
export class UserLoggedProvider {
  nombre;
  codigo;
  correo;
  especializacion;
  contraseña;
  horasHM = 2;
  horasHT = 2;
  horasMM = 2;
  horasMT = 2;

  constructor() {
  }

  upInfo(user: UserProvider){
    this.nombre = user.getName;
    this.codigo = user.getCode;
    this.correo = user.getEmail;
    this.especializacion = user.getEsp;
    this.contraseña = user.getPass;
  }

  cambPassword(newPass:string){
    this.contraseña = newPass;
  }

  getName(){
    return this.nombre;
  }

  getPass(){
    return this.contraseña;
  }

  getCode(){
    return this.codigo;
  }

  getEmail(){
    return this.correo;
  }

}
