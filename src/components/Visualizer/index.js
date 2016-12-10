import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import './style.scss'

@connect(state => ({
  heaps: state.ant,
}))
class Visualizer extends Component {

  render () {

    const {
      heaps,
    } = this.props

    return (
      <div className='Visualizer'>
        {heaps.map((heap, i) => (
          <div
            className='Heap'
            key={i}
          >
            {_.times(heap, i => (
              <div key={i} className='Rice' />
            ))}
          </div>
        ))}
      </div>
    )
  }

}

export default Visualizer
