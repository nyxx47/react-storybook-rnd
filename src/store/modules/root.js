import { combineEpics } from 'redux-observable'
import { combineReducers } from 'redux'
import {fetchUserEpic,users, isFetchingUser} from './cancellation'
import {switchUIEpic,paymentOptionsEpic, payments} from './payments/payment'

export const rootEpic = combineEpics(
    fetchUserEpic,
    switchUIEpic,
    paymentOptionsEpic
)

export const rootReducer = combineReducers({
    users,
    isFetchingUser,
    payments
})