import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'

import InputNumber from 'components/InputNumber'
import SavedHeaps from 'components/SavedHeaps'

@connect(state => ({
  heaps: state.ant,
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

  saveHeaps () {
    const { saveHeaps, heaps } = this.props
    saveHeaps(heaps)
  }

  render () {

    const {
      heaps,
      setHeapsNb,
      setHeapValue,
    } = this.props

    return (
      <div className='Setup'>
        <div className='Setup-block'>

          <div className='f f-center flow'>
            <label>
              {'Number of heaps:'}
            </label>
            <InputNumber
              min={1}
              max={5}
              value={heaps.length}
              onChange={setHeapsNb}
            />
            <button
              className='link'
              style={{ marginLeft: 20 }}
              onClick={::this.saveHeaps}
            >
              {'save'}
            </button>
          </div>

          <div className='flow'>
            <label style={{ marginBottom: 20 }}>
              {'Heaps:'}
            </label>

            {_.times(heaps.length, i => (
              <div
                key={i}
                className='f f-center flow'
              >
                <label>
                  {i}
                </label>
                <InputNumber
                  min={1}
                  max={10}
                  value={heaps[i]}
                  onChange={v => setHeapValue(i, v)}
                />
              </div>
            ))}

          </div>
        </div>
        <div className='Setup-block'>
          <SavedHeaps />
        </div>
      </div>
    )
  }

}

export default Setup
