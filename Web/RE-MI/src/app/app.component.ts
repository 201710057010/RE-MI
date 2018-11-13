import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RE-MI';
}


//clase para la creacion de usuarios
export class usuario{
  public nombre: string;
  public email: string;
  public password: string;

  constructor(nombre,email,password){
   this.nombre= nombre;
   this.email = email;
   this.password = password;
  }
}

export class reserva{
  public aula: string;
  public nombre : string;
  public codigo : string;
  public horario : string;
  public tipo : string;
  public fecha: string;
  constructor(aula,nombre,codigo,horario,tipo,fecha){
   this.aula = aula;
   this.nombre= nombre;
   this.codigo = codigo;
   this.horario = horario;
   this.tipo = tipo;
   this.fecha = fecha;
  }
}
