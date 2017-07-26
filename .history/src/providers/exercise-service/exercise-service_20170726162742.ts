import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Exercise } from '../../app/models/exercise-model';

@Injectable()
export class ExerciseServiceProvider {

    private exerciseURL = "data/exercise-data.json";
    exercises: Exercise[];

  constructor(public http: Http) {
    
  }

  getExercises(){
    return this.http.get(this.exerciseURL).map(res =>
    res.json());
  }

}
