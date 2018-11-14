import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ObjReservaProvider } from '../obj-reserva/obj-reserva';
import { SalonProvider, Dia, IHash } from '../salon/salon';
import { UserLoggedProvider } from '../user-logged/user-logged';

@Injectable()
export class ListasOnlineProvider {
  public salonesDisp: Array<SalonProvider> = new Array();     //Lista de salones disponibles.
  public misReservas: Array<ObjReservaProvider> = new Array();//Lista de reservas realizadas

  constructor(public http: HttpClient, public user:UserLoggedProvider) {
    var salon1 = new SalonProvider("30-114","Aula","Piano de cola y piano vertical");
    var salon2 = new SalonProvider("30-116","Aula","Piano de cola y piano vertical");
    var salon3 = new SalonProvider("30-112","Aula","Percusion");
    var salon4 = new SalonProvider("30-202","Aula","Clavinova");
    var salon5 = new SalonProvider("30-201","Aula","Clavinova");
    var salon6 = new SalonProvider("30-204","Aula","Piano de cola");
    var salon7 = new SalonProvider("30-308","Aula","Clavinova");
    var salon8 = new SalonProvider("30-307","Aula","Piano vertical");
    var salon9 = new SalonProvider("30-303","Aula","Piano de cola y piano vertical");
    var salon10 = new SalonProvider("30-305","Aula","2 clavinovas");
    var salon11 = new SalonProvider("30-301","Aula","Piano de cola y piano vertical");
    var salon12 = new SalonProvider("30-306","Aula","2 clavinovas");
    var salon13 = new SalonProvider("30-402","Aula","Piano vertical");
    //Cubiculos
    var salon14 = new SalonProvider("30-117","Cubiculo","Clavinova");
    var salon15 = new SalonProvider("30-118","Cubiculo","Clavinova");
    var salon16 = new SalonProvider("30-208","Cubiculo","Clavinova");
    var salon17 = new SalonProvider("30-207","Cubiculo","Clavinova");
    var salon18 = new SalonProvider("30-310","Cubiculo","Clavinova");
    var salon19 = new SalonProvider("30-311","Cubiculo","Clavinova");
    var salon20 = new SalonProvider("30-103","Cubiculo","Batería");
    var salon21 = new SalonProvider("30-104","Cubiculo","Batería");
    var salon22 = new SalonProvider("30-107","Cubiculo","Batería");
    var salon23 = new SalonProvider("30-108","Cubiculo","Piano vertical");
    var salon24 = new SalonProvider("30-228","Cubiculo","Piano vertical");
    var salon25 = new SalonProvider("30-220","Cubiculo","Piano vertical");
    var salon26 = new SalonProvider("30-227","Cubiculo","Piano vertical");
    var salon27 = new SalonProvider("30-223","Cubiculo","Piano vertical");
    var salon28 = new SalonProvider("30-222","Cubiculo","Piano vertical");
    var salon29 = new SalonProvider("30-224","Cubiculo","Piano vertical");
    var salon30 = new SalonProvider("30-225","Cubiculo","Piano vertical");
    var salon31 = new SalonProvider("30-226","Cubiculo","Piano vertical");

    //var salon1 = new SalonProvider("30-102","Aula","Clavinova");
    //var salon2 = new SalonProvider("30-203","Cubiculo","Piano");
    this.salonesDisp.push(salon1);
    this.salonesDisp.push(salon2);
    this.salonesDisp.push(salon3);
    this.salonesDisp.push(salon4);
    this.salonesDisp.push(salon5);
    this.salonesDisp.push(salon6);
    this.salonesDisp.push(salon7);
    this.salonesDisp.push(salon8);
    this.salonesDisp.push(salon9);
    this.salonesDisp.push(salon10);
    this.salonesDisp.push(salon11);
    this.salonesDisp.push(salon12);
    this.salonesDisp.push(salon13);
    this.salonesDisp.push(salon14);
    this.salonesDisp.push(salon15);
    this.salonesDisp.push(salon16);
    this.salonesDisp.push(salon17);
    this.salonesDisp.push(salon18);
    this.salonesDisp.push(salon19);
    this.salonesDisp.push(salon20);
    this.salonesDisp.push(salon21);
    this.salonesDisp.push(salon22);
    this.salonesDisp.push(salon23);
    this.salonesDisp.push(salon24);
    this.salonesDisp.push(salon25);
    this.salonesDisp.push(salon26);
    this.salonesDisp.push(salon27);
    this.salonesDisp.push(salon28);
    this.salonesDisp.push(salon29);
    this.salonesDisp.push(salon30);
    this.salonesDisp.push(salon31);
  }

  getAulasDisp() {
    return this.salonesDisp;
  }

  getMyReservas(){
    return this.misReservas;
  }

  //METODOS PARA RESERVAS REALIZADAS:
  addReserva(fecha:Date,hIni:number,hFin:number,salon: SalonProvider){
    //Método que añadirá una reserva a "Mis Reservas"
    var dateHoy = new Date();
    var newReserva = new ObjReservaProvider(123,this.user.getName(),fecha,hIni,hFin,salon,dateHoy);
    
    this.misReservas.push(newReserva);
    // **AQUI va a mandar la actualización al servidor diciendo que el salón está reservado el dia tal y a esta hora.**
  }

  addReservChatBot(newReserva: ObjReservaProvider){
    this.misReservas.push(newReserva);
    // **AQUI va a mandar la actualización al servidor diciendo que el salón está reservado el dia tal y a esta hora.**
  }

  addSalonDisp(salon: SalonProvider){
    this.salonesDisp.push(salon);
  }

  delReserva(reserva: ObjReservaProvider){
    //Método que borrará una reserva de la lista "Mis reservas" online
    let indice = this.misReservas.indexOf(reserva);
    this.misReservas.splice(indice,1);
    
    
    var fHoy = new Date();
    fHoy.setMonth(fHoy.getMonth()+1);

    console.log(fHoy.getDate());
    console.log(reserva.dia.getDate());
    if(reserva.dia.getDate()==fHoy.getDate()){
      console.log("El salon ahora está en true HOY");
      console.log(reserva.hInicial+" a "+reserva.hFinal);
      reserva.salon.hoy.horarios[reserva.hInicial+" a "+reserva.hFinal] = true;
    }else{
      console.log("El salon ahora está en true MAÑANA");
      reserva.salon.man.horarios[reserva.hInicial+" a "+reserva.hFinal] = true;
    }

    // **AQUI va a mandar la actualización al servidor diciendo que ya no está reservada el aula a esta hora.**
  }

  delSalonDisp(salon: SalonProvider){
    let indice = this.salonesDisp.indexOf(salon);
    this.salonesDisp.splice(indice,1);
  }

}
