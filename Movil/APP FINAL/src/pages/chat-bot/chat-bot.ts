import { ChatProvider } from './../../providers/chat/chat';
import { IChat } from './../../models/chat';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-chat-bot',
  templateUrl: 'chat-bot.html',
})
export class ChatBotPage {
  chats : IChat[] = [];
  message : string;
  sending : boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _chat : ChatProvider, public alertCtrl: AlertController) {
    const alert = this.alertCtrl.create({
      title: '¡Bienvenid@!',
      subTitle: 'Tu asistente Febos está esperando que lo saludes, él te ayudará en todo lo que necesites ;)',
      buttons: ['OK']
    });
    alert.present();
  }
  
  ionViewDidLoad() {
    // subscribe to pusher's event
    this._chat.getChannel().bind('chat', data => {
     if(data.type !== 'bot'){
       data.isMe = true;
     };
     this.chats.push(data);
    });
  }

  sendMessage() {
    this.sending = true;
    this._chat.sendMessage(this.message)
      .subscribe(resp => {
        this.message = '';
        this.sending = false;
      }, err => {
        this.sending = false;
      } );
  }

}
