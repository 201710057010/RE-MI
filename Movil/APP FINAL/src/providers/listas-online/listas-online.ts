import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObjReservaProvider } from '../obj-reserva/obj-reserva';
import { SalonProvider } from '../salon/salon';

@Injectable()
export class ListasOnlineProvider {
  public salonesDisp: Array<SalonProvider> = new Array();     //Lista de salones disponibles.
  public misReservas: Array<ObjReservaProvider> = new Array();//Lista de reservas realizadas

  constructor(public http: HttpClient) {
    
  }

  getAulasDisp() {
    // Método que traer las aulas disponibles de la DB según los parametros ingresados
    var salon1 = new SalonProvider("30-102","Aula","Clavinova");
    var salon2 = new SalonProvider("30-203","Cubiculo","Piano");
    
    this.salonesDisp.push(salon1);
    this.salonesDisp.push(salon2);
  }

  //METODOS PARA RESERVAS REALIZADAS:
  addReserva(salon: SalonProvider){
    //Método que añadirá una reserva a "Mis Reservas"
    var dateReserva = new Date(2018,10,11);
    var dateHoy = new Date(2018,10,10);
    var newReserva = new ObjReservaProvider(123,"elGetNombre",dateReserva,14,15,salon,dateHoy);
    
    this.misReservas.push(newReserva);
    // **AQUI va a mandar la actualización al servidor diciendo que el salón está reservado el dia tal y a esta hora.**
    this.salonesDisp = new Array();
  }

  delReserva(reserva: ObjReservaProvider){
    //Método que borrará una reserva de la lista "Mis reservas" online
    var indice = this.misReservas.indexOf(reserva);
    this.misReservas.splice(indice,1);
    // **AQUI va a mandar la actualización al servidor diciendo que ya no está reservada el aula a esta hora.**
  }

}
