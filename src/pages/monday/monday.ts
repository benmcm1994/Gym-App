import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Exercise } from "../../app/models/exercise-model";
import { ExerciseServiceProvider } from "../../providers/exercise-service/exercise-service";

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

  exercises: Exercise[];
  mode: "Observable";

  constructor(public navCtrl: NavController, public navParams: NavParams, public exerciseService: ExerciseServiceProvider) {
  }

  ngOnInit(){
    this.exerciseService.getExercises().subscribe(res => this.exercises = res);
  }

  addExercise(){
    
  }

}
