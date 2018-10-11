import { Component } from '@angular/core';
import { ListasOnlineProvider } from '../../providers/listas-online/listas-online';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { MisReservasPage } from '../mis-reservas/mis-reservas';
//import { ObjReservaProvider } from '../../providers/obj-reserva/obj-reserva';
import { SalonProvider } from '../../providers/salon/salon';


@IonicPage()
@Component({
  selector: 'page-aulas-disponibles',
  templateUrl: 'aulas-disponibles.html',
})
export class AulasDisponiblesPage {
  lista:Array<SalonProvider> = this.listAulas.salonesDisp; //Trae la lista de aulas disponibles del provider "ListAulasDispProvider"


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController,
    public listAulas: ListasOnlineProvider
  ) {
      this.listAulas.getAulasDisp();
    }

  aulaSelected(salon: SalonProvider){
    this.listAulas.addReserva(salon);
    
    this.viewCtrl.dismiss();
    this.navCtrl.setRoot(MisReservasPage);
  }

}
