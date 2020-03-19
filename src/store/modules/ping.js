import { ofType } from 'redux-observable'
import {delay, mapTo} from 'rxjs/operators'

const PING = 'PING';
const PONG = 'PONG';

export const ping = () => ({ type: PING });
const pong = () => ({ type: PONG });

export const pingEpic = action$ => action$.pipe(
  ofType(PING),
  delay(1000), // Asynchronously wait 1000ms then continue
  mapTo(pong())
);

export const pingReducer = (state = { isPinging: false }, action) => {
  switch (action.type) {
    case 'PING':
      return { isPinging: true };

    case 'PONG':
      return { isPinging: false };

    default:
      return state;
  }
};