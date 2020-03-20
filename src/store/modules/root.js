import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'
import {pingEpic, pingReducer} from './ping'
import {fetchUserEpic,users, isFetchingUser} from './cancellation'
import {switchUIEpic,paymentOptions, payments} from './paymentConfirmation'

export const rootEpic = combineEpics(
    pingEpic,
    fetchUserEpic,
    switchUIEpic,
    paymentOptions
)

export const rootReducer = combineReducers({
    pingReducer,
    users,
    isFetchingUser,
    payments
})