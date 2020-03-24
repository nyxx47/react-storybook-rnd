import { OPEN_OPTIONS, CLOSE_OPTIONS, IS_CHECKED } from "./types.js";

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