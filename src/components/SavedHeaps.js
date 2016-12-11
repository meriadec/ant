import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect(state => ({
  saved: state.saved,
  heaps: state.ant,
}), dispatch => ({

  restore (saved) {
    dispatch({ type: 'RESTORE', payload: saved })
  },

  saveHeaps (heaps) {
    dispatch({ type: 'SAVE_HEAPS', payload: heaps })
  },

}))
class SavedHeaps extends Component {

  saveHeaps () {
    const { saveHeaps, heaps } = this.props
    saveHeaps(heaps)
  }

  render () {

    const {
      saved,
      restore,
    } = this.props

    return (
      <div>
        <h2>{'Saved heaps'}</h2>
        <div>
          <button
            className='link'
            style={{ marginBottom: 20 }}
            onClick={::this.saveHeaps}
          >
            {'save'}
          </button>
        </div>
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
