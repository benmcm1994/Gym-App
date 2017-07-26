import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FridayPage } from './friday';

@NgModule({
  declarations: [
    FridayPage,
  ],
  imports: [
    IonicPageModule.forChild(FridayPage),
  ],
  exports: [
    FridayPage
  ]
})
export class FridayPageModule {}
