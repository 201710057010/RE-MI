import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { MisReservasPage } from '../mis-reservas/mis-reservas';
import { RegistroPage } from '../registro/registro';
import { ListUsersProvider } from '../../providers/list-users/list-users';
import { UserLoggedProvider } from '../../providers/user-logged/user-logged';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usrN: string;
  passW: string;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public usersList :ListUsersProvider,public usrLogged:UserLoggedProvider){

  }

  goReservas() {
    if(this.usersList.verifUser(this.usrN,this.passW)){
      var user = this.usersList.searchUser(this.usrN);
      this.usrLogged.upInfo(user);
      this.navCtrl.setRoot(MisReservasPage);
    }else{
      const alert = this.alertCtrl.create({
        title: 'Intenta de nuevo',
        subTitle: 'Tu usuario o contraseña incorrectos. Si no estás registrado has clic en el botón de abajo ;)',
        buttons: ['OK']
      });
      alert.present();
    }
  }

  goRegistro(){
    this.navCtrl.push(RegistroPage);
  }
}
