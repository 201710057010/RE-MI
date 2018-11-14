import { Component } from '@angular/core';
import { ListasOnlineProvider } from '../../providers/listas-online/listas-online';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { MisReservasPage } from '../mis-reservas/mis-reservas';
import { SalonProvider } from '../../providers/salon/salon';
//import { ObjReservaProvider } from '../../providers/obj-reserva/obj-reserva';


@IonicPage()
@Component({
  selector: 'page-aulas-disponibles',
  templateUrl: 'aulas-disponibles.html',
})
export class AulasDisponiblesPage {
  lista :Array<SalonProvider> = new Array(); //Trae la lista de aulas disponibles del provider "listAulasDispOnlineDispProvider"
  
  pTipo;  //estos atributos son de reserv-man
  pInstr;
  pDia;
  pTiempo;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController,
    public listAulasDispOnline: ListasOnlineProvider
  ) {
    this.update();  
  }

  update(){
    this.pTipo = this.navParams.get('tipo');
    this.pInstr = this.navParams.get('instr');
    this.pTiempo = this.navParams.get('time');
    this.pDia = this.navParams.get('dia');

    console.log(this.pTipo);
  
    let salonesDispOnline = this.listAulasDispOnline.getAulasDisp();
    for(let salon of salonesDispOnline){
      console.log(salon.getHorario(this.pDia,this.pTiempo));
      if((this.pTipo==salon.tipo)&&(this.pInstr==salon.instrumento)&&(salon.getHorario(this.pDia,this.pTiempo))){
        this.lista.push(salon);
      }
    }
  }

  aulaSelected(salon: SalonProvider){
    var fecha: Date;
    if(this.pDia=="Hoy"){
      console.log("aulaSelected HOY");
      salon.hoy.horarios[this.pTiempo] = false;
      fecha = salon.hoy.fecha;
    }else if(this.pDia=="Mañana"){
      console.log("aulaSelected MAÑANA");
      console.log("Entro mañana");
      salon.man.horarios[this.pTiempo] = false;
      fecha = salon.man.fecha;
    }
    fecha.setMonth(fecha.getMonth()+1);
    var hIni;
    var hFin;
    var palabras = this.pTiempo.split(" ");
      for(let palabra of palabras){
        var strToNum = parseInt(palabra);
        if(strToNum >= 0){
          if(hIni==null){
            hIni = strToNum;
          }else if(hFin==null){
            hFin = strToNum;
          }
        }
      }
    
    this.listAulasDispOnline.addReserva(fecha,hIni,hFin,salon);
    this.navCtrl.setRoot(MisReservasPage);
  }

}
