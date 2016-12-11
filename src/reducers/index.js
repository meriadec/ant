import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import ant from './ant'
import saved from './saved'
import iterations from './iterations'

export default combineReducers({
  routing,
  ant,
  saved,
  iterations,
})
