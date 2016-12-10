import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect(null, dispatch => ({
  next () {
    dispatch({
      type: 'NEXT',
    })
  },
}))
class Next extends Component {

  render () {
    const { next } = this.props
    return (
      <button className='btn submit Next' onClick={next}>
        {'Next'}
      </button>
    )
  }

}

export default Next
