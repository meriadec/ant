import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect(state => ({
  saved: state.saved,
}), dispatch => ({

  restore (saved) {
    dispatch({ type: 'RESTORE', payload: saved })
  },

}))
class SavedHeaps extends Component {

  render () {

    const {
      saved,
      restore,
    } = this.props

    return (
      <div>
        <h2>{'Saved heaps'}</h2>
        {saved.length > 0 ? saved.map((s, i) => (
          <div key={i} className='flow-semi'>
            {`[${s.join(', ')}] - `}
            <button
              className='link'
              onClick={() => restore(s)}
            >
              {'restore'}
            </button>
          </div>
        )) : (
          <em>{'You have no saved heaps.'}</em>
        )}
      </div>
    )
  }

}

export default SavedHeaps
