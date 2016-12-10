import React, { Component } from 'react'
import cx from 'classnames'
import { connect } from 'react-redux'

@connect(null, dispatch => ({
  next () {
    dispatch({
      type: 'NEXT',
    })
  },
}))
class Next extends Component {

  state = {
    playing: false,
    fastForwarding: false,
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
    const { next } = this.props
    const {
      playing,
      fastForwarding,
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
      </div>
    )
  }

}

export default Next
