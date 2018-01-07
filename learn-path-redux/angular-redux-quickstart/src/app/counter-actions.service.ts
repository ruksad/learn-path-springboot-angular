import {Action} from 'redux';
import { Injectable } from '@angular/core';

@Injectable()
export class CounterActionsService {
  static INCREMENT = 'INCREMENT';
  static DECREMENT = 'DECREMENT';
  constructor() {}

  increment(): Action {
    return {
      type: CounterActionsService.INCREMENT
    };
  }

  decrement(): Action {
    return {
      type: CounterActionsService.DECREMENT
    };
  }
}

