import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ListAulasProvider {
  public listaOnline: Array<objReserva> = new Array();
  public misReservas: Array<objReserva> = new Array();

  constructor(public http: HttpClient) {
    this.listaOnline.push(new objReserva("Hoy en la mañana","12","13","30-102"));
    this.listaOnline.push(new objReserva("Hoy en la mañana","15","16","30-201"));
    this.listaOnline.push(new objReserva("Hoy en la mañana","13","14","30-301"));
    this.listaOnline.push(new objReserva("Hoy en la mañana","16","17","30-205"));
    this.listaOnline.push(new objReserva("Hoy en la mañana","17","18","30-211"));
  }

  addReserva(reserva: objReserva){
    this.misReservas.push(reserva);
  }

  delReservaOnline(reserva: objReserva){
    // Método que borrará una reserva de la 'Lista Online' desde la base de datos
    var indice = this.listaOnline.indexOf(reserva);
    this.listaOnline.splice(indice,1);
  }

  getAulasDisp() {
    // Método que traera las aulas disponibles según los parametros ingresados
  }

}


export class objReserva {
  paraDia;
  hInicial;
  hFinal;
  aula;
  
  constructor(dia:string, inicial:string, final:string, aula:string){
    this.paraDia = dia;
    this.hInicial = inicial;
    this.hFinal = final;
    this.aula = aula;
  }
}
