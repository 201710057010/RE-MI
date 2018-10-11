import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MisReservasPage } from './mis-reservas';
import { ReservManPage } from '../reserv-man/reserv-man';

@NgModule({
  declarations: [
    MisReservasPage,
    ReservManPage
  ],
  imports: [
    IonicPageModule.forChild(MisReservasPage),
  ],
})
export class MisReservasPageModule {}
