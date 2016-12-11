import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import './style.scss'

@connect(state => ({
  heaps: state.ant,
}), dispatch => ({

  setHeapValue (i, v) {
    dispatch({ type: 'SET_HEAP_VALUE', payload: { i, v } })
  },

  addHeap () {
    dispatch({ type: 'ADD_HEAP' })
  },

}))
class Visualizer extends Component {

  render () {

    const {
      heaps,
      setHeapValue,
      addHeap,
    } = this.props

    return (
      <div className='Visualizer'>
        <div className='Heaps'>

          {heaps.map((heap, i) => (
            <div
              className='Heap'
              key={i}
            >
              {_.times(heap, i => (
                <div key={i} className='Rice' />
              ))}
              <div className='Heap-actions'>
                <button onClick={() => setHeapValue(i, heap - 1)}>
                  <i className='ion-minus' />
                </button>
                <button onClick={() => setHeapValue(i, heap + 1)}>
                  <i className='ion-plus' />
                </button>
              </div>
              <div className='Heap-nb'>
                {heap}
              </div>
            </div>
          ))}

          {heaps.length < 10 && (
            <div className='AddHeap'>
              <button className='link' onClick={addHeap}>
                {'+ new'}
              </button>
            </div>
          )}

        </div>
        <div className='Total'>
          {'Total: '}
          <span className='Iterations'>
            {_.sum(heaps)}
          </span>
        </div>
      </div>
    )
  }

}

export default Visualizer
