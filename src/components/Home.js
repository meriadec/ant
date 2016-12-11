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

      </div>
    )
  }

}

export default Home
