import { handleActions } from 'redux-actions'
import _ from 'lodash'

const initialState = []

export default handleActions({
  SAVE_HEAPS: (state, { payload: heaps }) => {
    const newState = _.cloneDeep(state)
    newState.push(heaps)
    return newState
  },
  CLEAR_HEAPS: () => ([]),
}, initialState)
