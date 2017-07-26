import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { ExerciseModel } from '../../app/models/exercise-model';

@Injectable()
export class ExerciseServiceProvider {

    private exerciseURL = "assets/data/exercise-data.json";
    exercises: ExerciseModel[];

  constructor(public http: Http) {
    
  }

  getExercises(){
    
  }

}
