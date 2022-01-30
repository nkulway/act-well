import { combineReducers } from 'redux'
import reset from './resetReducer'
import search from './searchReducer'
import user from './userReducer'

export default combineReducers({ reset, search, user })