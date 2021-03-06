import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';


import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ExerciseServiceProvider } from '../providers/exercise-service/exercise-service';
import { FridayPage } from "../pages/friday/friday";
import { ThursdayPage } from "../pages/thursday/thursday";
import { WednesdayPage } from "../pages/wednesday/wednesday";
import { MondayPage } from "../pages/monday/monday";
import { TuesdayPage } from "../pages/tuesday/tuesday";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    MondayPage,
    TuesdayPage,
    WednesdayPage,
    ThursdayPage,
    FridayPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    MondayPage,
    TuesdayPage,
    WednesdayPage,
    ThursdayPage,
    FridayPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ExerciseServiceProvider
  ]
})
export class AppModule {}
