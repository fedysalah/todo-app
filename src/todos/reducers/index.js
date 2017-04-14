import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';
import todos from './todos'
import geo from './geo'
import filters from './filters'

export const reducer = combineReducers({
  geo,
  todos,
  filters,
  routing: routerReducer
})
