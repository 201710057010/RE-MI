import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReservManPage } from './reserv-man';

@NgModule({
  declarations: [
    ReservManPage,
  ],
  imports: [
    IonicPageModule.forChild(ReservManPage),
  ],
})
export class ReservManPageModule {}
