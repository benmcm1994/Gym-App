import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { ExerciseModel } from '../../app/models/exercise-model';

@Injectable()
export class ExerciseServiceProvider {

      private exerciseURL = "assets/data/exercise-data.json";
      exercises: exercise[];

  constructor(public http: Http) {
    console.log('Hello ExerciseServiceProvider Provider');
  }



}
