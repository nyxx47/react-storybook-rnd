import { ofType } from "redux-observable";
import { delay, mapTo, filter, map } from "rxjs/operators";


// Constants
const OPEN_OPTIONS = "OPEN_OPTIONS";
const CLOSE_OPTIONS = "CLOSE_OPTIONS";
const IS_CHECKED = "IS_CHECKED";

// Action creator
export const open = () => ({type: OPEN_OPTIONS})
export const close = () => ({type: CLOSE_OPTIONS})
export const isChecked = option => ({type: IS_CHECKED, payload: option})

// Epic
export const switchUIEpic = action$ => action$.pipe(
    ofType(OPEN_OPTIONS),
    ofType(CLOSE_OPTIONS),
)

export const paymentOptionsEpic = action$ => action$.pipe(
    ofType('IS_CHECKED'),
    map(option => ({ type: 'CLOSE_OPTIONS', payload: option }))
)

// State
let initialState = {
    isStatus: true,
    isChecked: null
}

// Reducers
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