import { CLOSE_OPTIONS, IS_CHECKED } from "./types.js";
import { ofType } from "redux-observable";
import { delay, map } from "rxjs/operators";
import { open  } from "./actions";


export const switchUIEpic = action$ => action$.pipe(
    ofType(open()),
    delay(1000),
    ofType(CLOSE_OPTIONS),
)

export const paymentOptionsEpic = action$ => action$.pipe(
    ofType(IS_CHECKED),
    map(() => ({ type: 'CLOSE_OPTIONS' }))
)