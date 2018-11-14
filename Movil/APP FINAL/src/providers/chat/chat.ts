import { PusherProvider } from './../pusher/pusher';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SalonProvider } from '../salon/salon';
import { ObjReservaProvider } from '../obj-reserva/obj-reserva';
import { ListasOnlineProvider } from '../listas-online/listas-online';
//import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Injectable()
export class ChatProvider {
  type_salon: string;
  instrument: string;  // Éste atributo solo se usa para buscar el aula pero NO para reservarla.
  hInicial: number;
  hFinal: number;
  dia: Date;

  private _url = 'http://localhost:5000';

  private _channel : any;

  constructor(public http: HttpClient, private _pusher : PusherProvider, public listAulasOnline: ListasOnlineProvider) {
    this._channel = this._pusher.getPusher().subscribe('chat-bot');  
  }

  sendMessage( message : string) : Observable<any>{
    const param = {
      type: 'human',
      message,
    };
    this.isReserva(message);
    return this.http.post(`${this._url}/message`, param)
  }

  getChannel(){
    return this._channel;
  }

  /**
   * Este metodo se encarga de identificar si el usuario está diciendo el tipo de salon, intrumento, hora inicial,
   * hora final o dia en el cual quiere hacer su reserva de salón. 
   */
  isReserva(message: string){
    if(this.isSalon(message)){
      if(message=="un aula"){
        this.type_salon = "aula";
      }else if(message=="un cubiculo"){
        this.type_salon = "cubiculo";
      }else{
        this.type_salon = message;
      }

    }else if(this.isInstrument(message)){
      var palabras = message.split(" ");
      for(let palabra of palabras){
        var strToNum = parseInt(palabra); //Convierte la palabra en "numero" si es posible
        if(strToNum >= 0){
          if(strToNum==1){
            this.instrument = "Piano de cola";
          }else if(strToNum==2){
            this.instrument = "Percusión";
          }else if(strToNum==3){
            this.instrument = "Piano de cola y piano vertical";
          }else if(strToNum==4){
            this.instrument = "1 Clavinova";
          }else if(strToNum==5){
            this.instrument = "2 clavinovas";
          }else{
            console.log("No es ningúna opción de instrumento.");
          }
        }
      }
      if(this.instrument==null){
        this.instrument = message;
      }
    }else if(this.isTime(message)){
      var palabras = message.split(" ");
      for(let palabra of palabras){
        var strToNum = parseInt(palabra);
        if(strToNum >= 0){
          if(this.hInicial==null){
            this.hInicial = strToNum;
          }else if(this.hFinal==null){
            this.hFinal = strToNum;
          }
        }
      }
      console.log("Tipo salon: "+this.type_salon);
      console.log("Instrumento: "+this.instrument);
      console.log("hInicial: "+this.hInicial);
      console.log("hFinal: "+this.hFinal);
      console.log("Para el día: "+this.dia.getDate());
      this.reservar();

    }else if(this.isDia(message)){
      var day;
      var month;
      var year;
      var calendar = new Date();
      if((message=="hoy") || (message=="para hoy")){
        day = calendar.getDate();
      }else if((message=="mañana") || (message=="para mañana")){
        day = calendar.getDate();
        if(day==30){
          day = 1;
        }else{
          day = day+1;
        }
      }
      month = calendar.getMonth()+1;
      year = calendar.getFullYear();
      this.dia = new Date(year,month,day);

    }
  }

  reservar(){
    if((this.type_salon!=null) &&
       (this.hInicial!=null) &&
       (this.hFinal!=null) &&
       (this.instrument!=null) &&
       (this.dia!=null)){
      var fechaHoy = new Date();
      var salon = new SalonProvider("30-105",this.type_salon,this.instrument); //Este salon se tiene que buscar online!!
      var newReserva = new ObjReservaProvider(123,"elGetNombre",this.dia,this.hInicial,this.hFinal,salon,fechaHoy);
      this.listAulasOnline.addReservChatBot(newReserva);
      
      //ahora reinicializamos los datos registrados para la siguiente reserva
      this.type_salon = null;
      this.instrument = null;
      this.hInicial = null;
      this.hFinal = null;
      this.dia = null;
    }
  }

  /**
   * Metodo que verifica si el texto ingresado es un Aula o un Salón
   */
  isSalon(text: string){
    if((text=="aula") || (text=="cubiculo") ||
       (text=="un aula") || (text=="un cubiculo")){
        return true;
    }
    return false;
  }

  /**
   * Metodo que verifica si el texto ingresado es un tiempo 1 Hora/2 Horas (Para realizar reserva más adelante)
   * @param text 
   */
  isTime(text: string){
    var horarios = [
      "6 a 7","6 a 8","7 a 8","7 a 9","8 a 9","8 a 10","9 a 10","9 a 11","11 a 12","12 a 13","12 a 14","13 a 14","13 a 15","14 a 15","14 a 16",
      "15 a 16","15 a 17","16 a 17","16 a 18","17 a 18","17 a 19","18 a 19","18 a 20","19 a 20"
    ]
    for(let horario of horarios){
      if(text.indexOf(horario)>-1){
        return true;
      }
    }
    return false;
  }

  /**
   * Revisa si el texto ingrasado es una de las opciones:
   * a) Hoy antes de 12
   * b) Hoy después de 12
   * c) Mañana antes de 12
   * d) Mañana después de 12
   */
  isDia(text: string){
    if((text=="para hoy") ||
       (text=="para mañana") ||
       (text=="hoy") ||
       (text=="mañana")){
      return true;
    }
    return false;
  }

  /**
   * Revisa si el texto ingrasado es un tipo de istrumento
   */
  isInstrument(text: string){
    if((text=="1") ||
       (text=="2") ||
       (text=="3") ||
       (text=="4") ||
       (text=="5") ||
       (text=="la 1") ||
       (text=="la 2") ||
       (text=="la 3") ||
       (text=="la 4") ||
       (text=="la 5") ||
       (text.indexOf("clavinova")>-1) ||
       (text.indexOf("piano vertical")>-1) ||
       (text.indexOf("bateria")>-1)){
      return true;
    }
    return false;
  }
}
