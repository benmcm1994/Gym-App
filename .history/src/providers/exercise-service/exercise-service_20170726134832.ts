import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { ExerciseModel } from '../../app/models/exercise-model';

@Injectable()
export class ExerciseServiceProvider {

      private exercise = "assets/data/vehicles.json";

  constructor(public http: Http) {
    console.log('Hello ExerciseServiceProvider Provider');
  }

}
