import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TuesdayPage } from './tuesday';

@NgModule({
  declarations: [
    TuesdayPage,
  ],
  imports: [
    IonicPageModule.forChild(TuesdayPage),
  ],
  exports: [
    TuesdayPage
  ]
})
export class TuesdayPageModule {}
