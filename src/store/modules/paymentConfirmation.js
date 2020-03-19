import { ofType } from "redux-observable";
import { delay, mapTo } from "rxjs/operators";


// Constants
const OPEN_OPTIONS = "OPEN_OPTIONS";
const CLOSE_OPTIONS = "CLOSE_OPTIONS";

// Action creator
export const open = () => ({type: OPEN_OPTIONS})
export const close = () => ({type: CLOSE_OPTIONS})

// Epic
export const paymentEpic = action$ => action$.pipe(
    ofType(OPEN_OPTIONS),
    ofType(CLOSE_OPTIONS)
)

// State
let initialState = {
    isStatus: true
}

// Reducers
export const payments = (state = initialState, action) => {
    switch(action.type){
        case OPEN_OPTIONS:
            return {isStatus: false}
        case CLOSE_OPTIONS:
            return {isStatus: true}
        default:
            return state
    }
}