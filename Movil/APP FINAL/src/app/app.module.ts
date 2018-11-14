import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MisReservasPage } from '../pages/mis-reservas/mis-reservas';
import { CustomNavBarPage } from '../pages/custom-nav-bar/custom-nav-bar';
import { ReservManPage } from '../pages/reserv-man/reserv-man';
import { AjustesPage } from '../pages/ajustes/ajustes';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChatProvider } from '../providers/chat/chat';
import { PusherProvider } from '../providers/pusher/pusher';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChatBotPage } from '../pages/chat-bot/chat-bot';
import { AulasDisponiblesPage } from '../pages/aulas-disponibles/aulas-disponibles';
import { ListasOnlineProvider } from '../providers/listas-online/listas-online';
import { ObjReservaProvider } from '../providers/obj-reserva/obj-reserva';
import { SalonProvider } from '../providers/salon/salon';
import { UserProvider } from '../providers/user/user';
import { RegistroPage } from '../pages/registro/registro';
import { ListUsersProvider } from '../providers/list-users/list-users';
import { UserLoggedProvider } from '../providers/user-logged/user-logged';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MisReservasPage,
    CustomNavBarPage,
    ReservManPage,
    AjustesPage,
    ChatBotPage,
    AulasDisponiblesPage,
    RegistroPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MisReservasPage,
    CustomNavBarPage,
    ReservManPage,
    AjustesPage,
    ChatBotPage,
    AulasDisponiblesPage,
    RegistroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ChatProvider,
    PusherProvider,
    ListasOnlineProvider,
    ObjReservaProvider,
    SalonProvider,
    UserProvider,
    ListUsersProvider,
    UserLoggedProvider
  ]
})
export class AppModule {}
