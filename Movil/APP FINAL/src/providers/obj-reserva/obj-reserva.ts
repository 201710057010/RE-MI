import { Injectable } from '@angular/core';
import { SalonProvider } from '../salon/salon';

@Injectable()
export class ObjReservaProvider {
  id;
  estudiante;
  dia;
  hInicial;
  hFinal;
  salon;
  createdAt;

  constructor(id:number,estudiante:string,dia:Date,hInicial:number,hFinal:number,salon:SalonProvider,createdAt:Date){
    this.id = id;
    this.estudiante = estudiante;
    this.dia = dia;
    this.hInicial = hInicial;
    this.hFinal = hFinal;
    this.salon = salon;
    this.createdAt = createdAt;
  }
}
