import {combineReducers} from 'redux'
import {notesReducer} from './notesReducer'
import {visibilityReducer} from './visibilityReducer'

export const reducers = combineReducers({
  notes: notesReducer,
  visibility: visibilityReducer
})