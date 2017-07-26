import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThursdayPage } from './thursday';

@NgModule({
  declarations: [
    ThursdayPage,
  ],
  imports: [
    IonicPageModule.forChild(ThursdayPage),
  ],
  exports: [
    ThursdayPage
  ]
})
export class ThursdayPageModule {}
