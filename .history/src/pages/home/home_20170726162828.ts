import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Exercise } from '../../app/models/exercise-model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
