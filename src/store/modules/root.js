import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'
import {switchUIEpic,paymentOptionsEpic, payments} from './payments/payment'

export const rootEpic = combineEpics(
    switchUIEpic,
    paymentOptionsEpic
)

export const rootReducer = combineReducers({
    payments
})