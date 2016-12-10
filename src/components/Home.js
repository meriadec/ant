import React, { Component } from 'react'

import Visualizer from 'components/Visualizer'
import Setup from 'components/Setup'
import Next from 'components/Next'

class Home extends Component {

  render () {
    return (
      <div>
        <h1>{'the ant problem'}</h1>

        <Next />

        <Visualizer />

        <Setup />

      </div>
    )
  }

}

export default Home
