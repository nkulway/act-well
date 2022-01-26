import { combineReducers } from 'redux'
import reset from './resetReducer'
import search from './searchReducer'

export default combineReducers({ reset, search })