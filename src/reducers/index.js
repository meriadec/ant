import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'

import ant from './ant'

export default combineReducers({
  routing,
  ant,
})
