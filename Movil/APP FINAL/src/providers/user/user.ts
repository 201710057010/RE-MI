import { Injectable } from '@angular/core';

@Injectable()
export class UserProvider {
  nombre;
  codigo;
  correo;
  especializacion;
  contraseña = "admin";
  horasHM = 2;
  horasHT = 2;
  horasMM = 2;
  horasMT = 2;

  constructor(/*name:string,codigo:string,email:string,espec:string,pass:string*/) {
    /*this.nombre = name;
    this.codigo = codigo;
    this.correo = email;
    this.especializacion = espec;
    this.contraseña = pass;*/
  }

  cambPassword(newPass:string){
    this.contraseña = newPass;
  }

  getPass(){
    return this.contraseña;
  }

  getCode(){
    return this.codigo;
  }

}