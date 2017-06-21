import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcercaPage } from './acerca';

@NgModule({
  declarations: [
    AcercaPage,
  ],
  imports: [
    IonicPageModule.forChild(AcercaPage),
  ],
  exports: [
    AcercaPage
  ]
})
export class AcercaPageModule {}
