import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ReservManPage } from '../reserv-man/reserv-man';
import { AjustesPage } from '../ajustes/ajustes';
import { ChatBotPage } from '../chat-bot/chat-bot';
import { ListasOnlineProvider } from '../../providers/listas-online/listas-online';
import { ObjReservaProvider } from '../../providers/obj-reserva/obj-reserva';


@IonicPage()
@Component({
  selector: 'page-mis-reservas',
  templateUrl: 'mis-reservas.html',
})
export class MisReservasPage {
  myReservas:Array<ObjReservaProvider> = [];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController, 
    public modalCtrl: ModalController, 
    public listAulas: ListasOnlineProvider) 
    {
      this.myReservas = listAulas.misReservas;
    }

    
  metDesrv(reserva: ObjReservaProvider) {
    const alert = this.alertCtrl.create({
      title: '¿Cancelar reserva?',
      subTitle: 'Estás a punto de cancelar tu reserva.',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            //Borra la reserva de la lista
            this.listAulas.delReserva(reserva);
          }
        },
        {
          text: 'Cancelar',
          handler: () => {
            //No pasa nada
          }
        }
      ]
    });
    alert.present();
  }

  goResevManual() {
    this.navCtrl.push(ReservManPage);
  }

  goChatBot() {
    this.navCtrl.push(ChatBotPage);
  }

  irToAjustes() {
    this.navCtrl.push(AjustesPage);
  }

}