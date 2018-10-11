import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { AulasDisponiblesPage } from '../aulas-disponibles/aulas-disponibles';

@IonicPage()
@Component({
  selector: 'page-reserv-man',
  templateUrl: 'reserv-man.html',
})
export class ReservManPage {
  pPiano;
  pDia;
  pTiempo;

  buscar: boolean = true;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    public alertCtrl: AlertController, 
    public viewCtrl: ViewController, 
    public modalCtrl: ModalController
  ) {

  }

  buscAulas(){
    if(this.buscar == true){//this.pPiano!=null)&&(this.pDia!=null)&&(this.pTiempo!=null)){
      let modal = this.modalCtrl.create(AulasDisponiblesPage);
      modal.present();
      
    } else {
        const alert = this.alertCtrl.create({
        title: '¡No tan rápido!',
        subTitle: 'Primero debes llenar todos los campos.',
        buttons: ['OK']
      });
      alert.present();
    }
  }

 cerrarRervMan() {
   this.viewCtrl.dismiss();
 }

}

