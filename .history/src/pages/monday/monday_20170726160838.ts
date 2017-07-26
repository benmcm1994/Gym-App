import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExerciseModel } from "../../app/models/exercise-model";

/**
 * Generated class for the MondayPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-monday',
  templateUrl: 'monday.html',
})
export class MondayPage {

  exercises: ExerciseModel[];
  mode: "Observable";

  constructor(public navCtrl: NavController, public navParams: NavParams, public exerciseService: Exercise) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MondayPage');
  }

}
