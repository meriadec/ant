import React, { Component } from 'react'

import Visualizer from 'components/Visualizer'
import Setup from 'components/Setup'

class Home extends Component {

  render () {
    return (
      <div>
        <h1>{'the ant problem'}</h1>

        <Setup />

        <Visualizer />

      </div>
    )
  }

}

export default Home
