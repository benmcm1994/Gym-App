import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { MondayPage } from "../monday/monday";
import { FridayPage } from "../friday/friday";
import { ThursdayPage } from "../thursday/thursday";
import { WednesdayPage } from "../wednesday/wednesday";
import { TuesdayPage } from "../tuesday/tuesday";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MondayPage;
  tab2Root = TuesdayPage;
  tab3Root = WednesdayPage;
  tab4Root = ThursdayPage;
  tab5Root = FridayPage;

  constructor() {

  }
}
