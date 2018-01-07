import { AppState } from './app-state';
import { CounterActionsService } from './counter-actions.service';
import { Action } from 'redux';


export const INITIAL_STATE: AppState = {
    count: 0,
};

export function rootReducer(lastState: AppState, action: Action): AppState {
  switch (action.type) {
    case CounterActionsService.INCREMENT:
      return {
        count: lastState.count + 1
      };
    case CounterActionsService.DECREMENT:
      return {
        count: lastState.count - 1
      };
  }
  return lastState;
}
