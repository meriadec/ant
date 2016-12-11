import React, { Component } from 'react'

import Visualizer from 'components/Visualizer'
import SavedHeaps from 'components/SavedHeaps'
import Next from 'components/Next'

class Home extends Component {

  render () {
    return (
      <div>
        <h1>{'the ant problem'}</h1>

        <Next />

        <Visualizer />

        <SavedHeaps />

        <div className='Hint'>
          {'Hint: [ 3, 6, 10, 15, 21, 28, 36, 45, ... ] see '}
          <a target='_blank' rel='noreferer noopener' href='https://en.wikipedia.org/wiki/Triangular_number'>
            {'Triangular number'}
          </a>
        </div>

      </div>
    )
  }

}

export default Home
