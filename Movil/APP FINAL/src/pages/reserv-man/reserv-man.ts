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
  pTipo;
  pInstr;
  pDia;
  pTiempo;

  horaActual;
  diaActual;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    public alertCtrl: AlertController, 
    public viewCtrl: ViewController, 
    public modalCtrl: ModalController
  ) {
    var calendar = new Date();
    this.horaActual = calendar.getHours();
    this.diaActual = calendar.getDate();
  }

  buscAulas(){
    if((this.pTipo!=null)&&(this.pInstr!=null)&&(this.pTiempo!=null)&&(this.pDia!=null)){

      this.navCtrl.push(AulasDisponiblesPage,{tipo:this.pTipo,instr:this.pInstr,dia:this.pDia,time:this.pTiempo});
      
    } else {
        const alert = this.alertCtrl.create({
        title: '¡No tan rápido!',
        subTitle: 'Primero debes llenar todos los campos.',
        buttons: ['OK']
      });
      alert.present();
    }
  }

  /**
   * Este metodo se encarga de mostrar en el html los horarios según si el usuario eligió hoy o mañana y la hora
   * actual que séa en ese momento
   */
  verHora(){
    
  }

 cerrarRervMan() {
   this.viewCtrl.dismiss();
 }

}

