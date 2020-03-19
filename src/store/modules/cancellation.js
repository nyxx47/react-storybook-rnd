import { ofType } from 'redux-observable'
import {delay, mergeMap, map,takeUntil, filter} from 'rxjs/operators'
import {of} from 'rxjs'

const FETCH_USER = 'FETCH_USER';
const FETCH_USER_FULFILLED = 'FETCH_USER_FULFILLED';
const FETCH_USER_REJECTED = 'FETCH_USER_REJECTED';
const FETCH_USER_CANCELLED = 'FETCH_USER_CANCELLED';

export const fetchUser = id => ({ type: FETCH_USER, payload: id });
export const fetchUserFulfilled = payload => ({ type: FETCH_USER_FULFILLED, payload });
export const cancelFetchUser = () => ({ type: FETCH_USER_CANCELLED });

const fakeAjax = url => of({
  id: url.substring(url.lastIndexOf('/') + 1),
  firstName: 'Bilbo',
  lastName: 'Baggins'
}).pipe(delay(1000));

export const fetchUserEpic = action$ => action$.pipe(
  ofType(FETCH_USER),
  mergeMap(action => fakeAjax(`/api/users/${action.payload}`).pipe(
    map(response => fetchUserFulfilled(response)),
    takeUntil(action$.pipe(
      filter(action => action.type === FETCH_USER_CANCELLED)
    ))
  ))
);

export const users = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER:
        return {};

    case FETCH_USER_FULFILLED:
      return {
        ...state,
        [action.payload.id]: action.payload
      };

    default:
      return state;
  }
};

export const isFetchingUser = (state = false, action) => {
  switch (action.type) {
    case FETCH_USER:
      return true;

    case FETCH_USER_FULFILLED:
    case FETCH_USER_CANCELLED:
      return false;

    default:
      return state;
  }
};
