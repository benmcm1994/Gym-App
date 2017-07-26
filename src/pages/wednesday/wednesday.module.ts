import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WednesdayPage } from './wednesday';

@NgModule({
  declarations: [
    WednesdayPage,
  ],
  imports: [
    IonicPageModule.forChild(WednesdayPage),
  ],
  exports: [
    WednesdayPage
  ]
})
export class WednesdayPageModule {}
