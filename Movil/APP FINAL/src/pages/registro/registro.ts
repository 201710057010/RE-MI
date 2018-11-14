import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { MisReservasPage } from '../mis-reservas/mis-reservas';
import { ListUsersProvider } from '../../providers/list-users/list-users';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
  userName: string;
  userCode: string;
  userInstr: string;
  userEmail: string;
  userPass1: string;
  userPass2: string;

  constructor(public navCtrl: NavController,public navParams: NavParams,public userList :ListUsersProvider,public alertCtrl: AlertController) {
  }

  goMisReservas() {
    if(this.userCode==null||
      this.userName==null||this.userInstr==null||
      this.userPass1==null){   
      const alert = this.alertCtrl.create({
        title: '¡No tan rápido!',
        subTitle: 'Por favor rellena todos los campos.',
        buttons: ['OK']
      });
      alert.present();
    }else if(!(this.userCode.length==12)){
      const alert = this.alertCtrl.create({
        title: '"SUSURRO"',
        subTitle: 'Éste no es un codigo de miembro estudiantíl válido, por favor revísalo e intenta de nuevo.',
        buttons: ['OK']
      });
      alert.present();
    }else if((!(this.userEmail.length>=14)&&!(this.userEmail.indexOf("@eafit.edu.co")>-1))){
      const alert = this.alertCtrl.create({
        title: '"SUSURRO"',
        subTitle: 'Esta App es sólo para miembros de la universidad, si lo eres por favor introduce tu correo institucional.',
        buttons: ['OK']
      });
      alert.present();
    }else if(this.userList.userRegistred(this.userEmail)){
      const alert = this.alertCtrl.create({
        title: '"SUSURRO"',
        subTitle: 'Este correo ya está siendo usado por un usuario.',
        buttons: ['OK']
      });
      alert.present();
    }else if(this.userPass1!=this.userPass2){
      const alert = this.alertCtrl.create({
        title: '"SUSURRO"',
        subTitle: 'Las contraseñas no coinciden, por favor inténtalo de nuevo.',
        buttons: ['OK']
      });
      alert.present();
    }else{
      var user = new UserProvider(this.userName,this.userCode,this.userEmail,this.userInstr,this.userPass1);
      this.userList.addUsr(user);

      this.navCtrl.setRoot(MisReservasPage);
      const alert = this.alertCtrl.create({
        title: '!Bienvenid@!',
        subTitle: 'Aquí es donde aparecerán todas las reservas que tengas, hay dos maneras de realizar reservas la primera es interactuando con un caballeroso ChatBot o la otra es realizandolas de manera Manual.',
        buttons: ['OK']
      });
      alert.present();
    }
  }
}
