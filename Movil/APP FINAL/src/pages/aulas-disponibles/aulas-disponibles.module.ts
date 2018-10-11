import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AulasDisponiblesPage } from './aulas-disponibles';

@NgModule({
  declarations: [
    AulasDisponiblesPage,
  ],
  imports: [
    IonicPageModule.forChild(AulasDisponiblesPage),
  ],
})
export class AulasDisponiblesPageModule {}
