import { handleActions } from 'redux-actions'

const initialState = 0

export default handleActions({
  NEXT: state => state + 1,
  RESET_ITERATIONS: () => 0,
}, initialState)
