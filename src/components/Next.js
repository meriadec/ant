import React, { Component } from 'react'
import cx from 'classnames'
import { connect } from 'react-redux'
import _ from 'lodash'

@connect(state => ({
  iterations: state.iterations,
  heaps: state.ant,
}), dispatch => ({
  next () {
    dispatch({ type: 'NEXT', })
  },

  resetIterations () {
    dispatch({ type: 'RESET_ITERATIONS', })
  }
}))
class Next extends Component {

  state = {
    iterations: 0,
    playing: false,
    fastForwarding: false,
  }

  componentWillReceiveProps (nextProps) {
    // just calculated next state,
    // let's see if we stop
    if (nextProps.iterations > this.props.iterations) {
      if (_.isEqual(this.props.heaps, nextProps.heaps)) {
        this.stop()
      } else {
        this.setState({
          iterations: this.state.iterations + 1,
        })
      }
    } else if (nextProps.iterations < this.props.iterations) {
      this.setState({
        iterations: nextProps.iterations,
      })
    }
  }

  stop () {
    if (this._timeout) {
      clearTimeout(this._timeout)
      this._timeout = null
    }
    this.setState({
      playing: false,
      fastForwarding: false,
    })
  }

  play () {
    const { playing, fastForwarding } = this.state
    if (this._timeout) {
      clearTimeout(this._timeout)
      this._timeout = null
    }
    if (playing || fastForwarding) {
      this.setState({
        playing: false,
        fastForwarding: false,
      })
    } else {
      this.setState({
        playing: true,
        fastForwarding: false,
      }, this.loop)
    }
  }

  fastForward () {
    const { playing, fastForwarding } = this.state
    if (this._timeout) {
      clearTimeout(this._timeout)
      this._timeout = null
    }
    if (fastForwarding) {
      this.setState({
        playing: false,
        fastForwarding: false,
      })
    } else {
      this.setState({
        playing: false,
        fastForwarding: true,
      }, this.loop)
    }
  }

  loop = () => {
    const { playing, fastForwarding } = this.state
    if (!playing && !fastForwarding) { return }
    this.props.next()
    this._timeout = setTimeout(this.loop, fastForwarding ? 100 : 400)
  }

  render () {

    const {
      resetIterations,
      next,
    } = this.props

    const {
      playing,
      fastForwarding,
      iterations,
    } = this.state

    return (
      <div className='Next'>
        <button
          className={cx('btn', { active: playing })}
          onClick={::this.play}
        >
          <i className={`ion-ios-${(playing || fastForwarding) ? 'pause' : 'play'}`} />
        </button>
        <button className={cx('btn', { active: fastForwarding })} onClick={::this.fastForward}>
          <i className='ion-ios-fastforward' />
        </button>
        {` iterations: ${iterations} - `}
        <button className='link' onClick={resetIterations}>
          {'reset'}
        </button>
      </div>
    )
  }

}

export default Next
