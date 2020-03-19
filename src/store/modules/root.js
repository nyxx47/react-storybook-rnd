import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'
import {pingEpic, pingReducer} from './ping'
import {fetchUserEpic,users, isFetchingUser} from './cancellation'
import {paymentEpic, payments} from './paymentConfirmation'

export const rootEpic = combineEpics(
    pingEpic,
    fetchUserEpic,
    paymentEpic
)

export const rootReducer = combineReducers({
    pingReducer,
    users,
    isFetchingUser,
    payments
})