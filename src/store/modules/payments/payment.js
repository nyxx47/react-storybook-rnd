import { OPEN_OPTIONS, CLOSE_OPTIONS, IS_CHECKED } from "./constants";
import { ofType } from "redux-observable";
import { delay, map } from "rxjs/operators";
import { open  } from "./actions";

export const switchUIEpic = action$ => action$.pipe(
    ofType(open()),
    delay(1000),
    ofType(CLOSE_OPTIONS),
)

export const paymentOptionsEpic = action$ => action$.pipe(
    ofType('IS_CHECKED'),
    map(() => ({ type: 'CLOSE_OPTIONS' }))
)

let initialState = {
    isStatus: true,
    isChecked: null
}

export const payments = (state = initialState, action) => {
    switch(action.type){
        case OPEN_OPTIONS:
            return {
                ...state,
                isStatus: false
            }
        case CLOSE_OPTIONS:
            return {
                ...state,
                isStatus: true
            }
        case IS_CHECKED:
            return {
                ...state,
                isChecked: action.payload
            }
        default:
            return state
    }
}