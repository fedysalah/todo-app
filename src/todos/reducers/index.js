import { combineReducers } from 'redux'

import todos from './todos'
import filters from './filters'
import geo from './geo'

export const reducer = combineReducers({
  todos,
  filters,
  geo
})
