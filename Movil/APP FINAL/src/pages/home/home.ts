import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MisReservasPage } from '../mis-reservas/mis-reservas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goPagina2() {
    this.navCtrl.setRoot(MisReservasPage);
  }

}
