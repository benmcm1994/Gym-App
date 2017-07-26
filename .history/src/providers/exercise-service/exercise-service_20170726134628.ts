import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { }

@Injectable()
export class ExerciseServiceProvider {

  constructor(public http: Http) {
    console.log('Hello ExerciseServiceProvider Provider');
  }

}
