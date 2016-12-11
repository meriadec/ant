import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'

import InputNumber from 'components/InputNumber'
import SavedHeaps from 'components/SavedHeaps'

@connect(state => ({
}), dispatch => ({

  setHeapsNb (nb) {
    dispatch({ type: 'SET_HEAPS_NB', payload: nb })
  },

  setHeapValue (i, v) {
    dispatch({ type: 'SET_HEAP_VALUE', payload: { i, v } })
  },

  saveHeaps (heaps) {
    dispatch({ type: 'SAVE_HEAPS', payload: heaps })
  },

}))
class Setup extends Component {

  render () {

    const {
      heaps,
      setHeapsNb,
      setHeapValue,
    } = this.props

    return (
      <div className='Setup'>
        <SavedHeaps />
      </div>
    )
  }

}

export default Setup
