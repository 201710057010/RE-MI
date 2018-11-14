import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { MisReservasPage } from '../mis-reservas/mis-reservas';
import { ListUsersProvider } from '../../providers/list-users/list-users';
import { UserLoggedProvider } from '../../providers/user-logged/user-logged';

@IonicPage()
@Component({
  selector: 'page-ajustes',
  templateUrl: 'ajustes.html',
})
export class AjustesPage {
  passActual;
  newPass;
  newPassConf;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alerCtrl: AlertController,
    public usersList: ListUsersProvider,
    public user: UserLoggedProvider) {
  }

  cambPass() {
    if(this.passActual == this.user.getPass()){
      if(this.newPass == this.newPassConf && this.newPass!=null){
        this.user.cambPassword(this.newPass);
        let alert = this.alerCtrl.create({
          title: 'Resultado',
          message: 'Tu contraseña ha sido cambiada exitosamente.',
          buttons: ['Ok']
        });
        alert.present()
        this.navCtrl.setRoot(MisReservasPage);
      }else {
        let alert = this.alerCtrl.create({
          title: 'ALGO ANDA MAL',
          message: 'La nueva contraseña no coincide con su confirmación, por favor inténtalo nuevamente.',
          buttons: ['Ok']          
        });
        alert.present()
      }
    }else {
      let alert = this.alerCtrl.create({
        title: 'ALGO ANDA MAL',
        message: 'No ingresaste tu contraseña actual correctamente, por favor inténtalo de nuevo.',
        buttons: ['Ok']
      });
      alert.present()
    }
    
  }

  closeSes() {
    const confirm = this.alerCtrl.create({
      title: 'Cierre de sesión',
      message: 'Estás a punto de cerrar sesión, ¿estás seguro?',
      buttons: [
        {
          text: 'Aceptar',
          handler: () => {
            this.navCtrl.setRoot(HomePage);
          }
        },
        {
          text: 'Cancelar',
          handler: () => {
            //no hacer nada
          }
        }
      ]
    });
    confirm.present();
  }

}
