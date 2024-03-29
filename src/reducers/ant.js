import { handleActions } from 'redux-actions'
import _ from 'lodash'

const heaps = [
  3,
  3,
  4,
]

export default handleActions({

  SET_HEAPS_NB: (heaps, { payload: nb }) => {
    if (nb === heaps.length) { return heaps }
    if (nb > heaps.length) {
      return heaps.concat(heaps[heaps.length - 1])
    }
    return heaps.filter((e, i) => i !== heaps.length - 1)
  },

  SET_HEAP_VALUE: (heaps, { payload: { i, v } }) => {
    if (heaps.length === 1 && v === 0) { return heaps }
    if (v > 10) { return heaps }
    let newHeaps = _.clone(heaps)
    newHeaps[i] = v
    if (newHeaps[i] <= 0) {
      newHeaps = newHeaps.filter((e, ci) => i !== ci)
    }
    return newHeaps
  },

  NEXT: (heaps) => {
    let newHeaps = _.clone(heaps)
    let inAnt = 0
    _.forEach(newHeaps, (val, i) => {
      // take a rice into heap
      inAnt++
      // decrement rice
      newHeaps[i] = val - 1
    })
    // put all rices to the ground
    newHeaps.push(inAnt)
    // remove empty heaps
    newHeaps = newHeaps.filter(h => h !== 0)
    return newHeaps
  },

  ADD_HEAP: (heaps) => {
    return heaps.concat(heaps[heaps.length - 1])
  },

  RESTORE: (state, { payload: heaps }) => heaps,

}, heaps)
