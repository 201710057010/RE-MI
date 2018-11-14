import { Injectable } from '@angular/core';

@Injectable()
export class SalonProvider {
  codigo;
  tipo;
  instrumento;
  hoy: Dia;
  man: Dia;
  //horarios: IHash = {};

  constructor(codigo:string,tipo:string,instrumento:string) {
    this.codigo = codigo;
    this.tipo = tipo;
    this.instrumento = instrumento;

    let horariosHoy: IHash = {};
    let horariosMa: IHash = {};
    let fechaHoy = new Date();
    fechaHoy.setDate(fechaHoy.getDate());
    let fechaMan = new Date();
    fechaMan.setDate(fechaHoy.getDate()+1);
    fechaMan.setMonth(fechaHoy.getMonth()+1);

    //console.log("Salon.ts fHoy "+fechaHoy.getDate());
    //console.log("Salon.ts fMan "+fechaMan.getDate());
    this.hoy = new Dia("Hoy",horariosHoy,fechaHoy);
    this.man = new Dia("Mañana",horariosMa,fechaMan);

    horariosHoy["6 a 7"] = true;
    horariosHoy["6 a 8"] = true;
    horariosHoy["7 a 8"] = true;
    horariosHoy["7 a 9"] = true;
    horariosHoy["8 a 9"] = true;
    horariosHoy["8 a 10"] = true;
    horariosHoy["9 a 10"] = true;
    horariosHoy["9 a 11"] = true;
    horariosHoy["10 a 12"] = true;
    horariosHoy["11 a 12"] = true;
    horariosHoy["12 a 13"] = true;
    horariosHoy["12 a 14"] = true;
    horariosHoy["13 a 14"] = true;
    horariosHoy["13 a 15"] = true;
    horariosHoy["14 a 15"] = true;
    horariosHoy["14 a 16"] = true;
    horariosHoy["15 a 16"] = true;
    horariosHoy["15 a 17"] = true;
    horariosHoy["16 a 17"] = true;
    horariosHoy["16 a 18"] = true;
    horariosHoy["17 a 18"] = true;
    horariosHoy["17 a 19"] = true;
    horariosHoy["18 a 19"] = true;
    horariosHoy["18 a 20"] = true;
    horariosHoy["19 a 20"] = true;

    horariosMa["6 a 7"] = true;
    horariosMa["6 a 8"] = true;
    horariosMa["7 a 8"] = true;
    horariosMa["7 a 9"] = true;
    horariosMa["8 a 9"] = true;
    horariosMa["8 a 10"] = true;
    horariosMa["9 a 10"] = true;
    horariosMa["9 a 11"] = true;
    horariosHoy["10 a 12"] = true;
    horariosMa["11 a 12"] = true;
    horariosMa["12 a 13"] = true;
    horariosMa["12 a 14"] = true;
    horariosMa["13 a 14"] = true;
    horariosMa["13 a 15"] = true;
    horariosMa["14 a 15"] = true;
    horariosMa["14 a 16"] = true;
    horariosMa["15 a 16"] = true;
    horariosMa["15 a 17"] = true;
    horariosMa["16 a 17"] = true;
    horariosMa["16 a 18"] = true;
    horariosMa["17 a 18"] = true;
    horariosMa["17 a 19"] = true;
    horariosMa["18 a 19"] = true;
    horariosMa["18 a 20"] = true;
    horariosMa["19 a 20"] = true;
    /*this.horarios["6 a 7"] = true;
    this.horarios["6 a 8"] = true;
    this.horarios["7 a 8"] = true;
    this.horarios["7 a 9"] = true;
    this.horarios["8 a 9"] = true;
    this.horarios["8 a 10"] = true;
    this.horarios["9 a 10"] = true;
    this.horarios["9 a 11"] = true;
    this.horarios["11 a 12"] = true;
    this.horarios["12 a 13"] = true;
    this.horarios["12 a 14"] = true;
    this.horarios["13 a 14"] = true;
    this.horarios["13 a 15"] = true;
    this.horarios["14 a 15"] = true;
    this.horarios["14 a 16"] = true;
    this.horarios["15 a 16"] = true;
    this.horarios["15 a 17"] = true;
    this.horarios["16 a 17"] = true;
    this.horarios["16 a 18"] = true;
    this.horarios["17 a 18"] = true;
    this.horarios["17 a 19"] = true;
    this.horarios["18 a 19"] = true;
    this.horarios["18 a 20"] = true;
    this.horarios["19 a 20"] = true;*/
  }

  getHorario(dia:String, horario: string){
    if(dia=="Hoy"){
      return this.hoy.horarios[horario];
    }else if(dia=="Mañana"){
      return this.man.horarios[horario];
    }
  }
}

export class Dia {
  dia :string;
  fecha: Date;
  horarios: IHash;

  constructor(d:string,h:IHash,f:Date){
    this.dia = d;
    this.horarios = h;
    this.fecha = f;
  }
}

export interface IHash {
  [horario: string]: boolean;
}
