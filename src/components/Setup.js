import React, { Component } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'

import InputNumber from 'components/InputNumber'

@connect(state => ({
  heaps: state.ant,
}), dispatch => ({

  setHeapsNb (nb) {
    dispatch({ type: 'SET_HEAPS_NB', payload: nb })
  },

  setHeapValue (i, v) {
    dispatch({ type: 'SET_HEAP_VALUE', payload: { i, v } })
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
      <form>
        <fieldset>
          <legend>
            {'initial data'}
          </legend>

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
        </fieldset>
      </form>
    )
  }

}

export default Setup
