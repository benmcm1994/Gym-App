import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { MondayPage } from "../monday/monday";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = MondayPage;
  tab2Root = TuesdayPage;
  tab3Root = WednesdayHomePage;
  tab4Root = HomePage;
  tab5Root = HomePage;


  constructor() {

  }
}
