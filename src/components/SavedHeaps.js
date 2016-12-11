import React, { Component } from 'react'
import { connect } from 'react-redux'

@connect(state => ({
  saved: state.saved,
  iterations: state.iterations,
  heaps: state.ant,
}), dispatch => ({

  restore (saved) {
    dispatch({ type: 'RESTORE', payload: saved })
  },

  saveHeaps (heaps) {
    dispatch({ type: 'SAVE_HEAPS', payload: heaps })
  },

  clear () {
    dispatch({ type: 'CLEAR_HEAPS' })
  },

}))
class SavedHeaps extends Component {

  state = {
    record: false,
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.iterations > this.props.iterations) {
      if (this.state.record) {
        this.props.saveHeaps(this.props.heaps)
      }
    }
  }

  saveHeaps () {
    const { saveHeaps, heaps } = this.props
    saveHeaps(heaps)
  }

  exportCSV () {
    const el = document.createElement('a')
    const val = this.props.saved
      .map(el => el.join(';'))
      .join('\n')
    const content = encodeURIComponent(`${val}\n`)
    el.setAttribute('href', `data:text/plain;charset=utf-8,${content}`)
    el.setAttribute('download', 'export.csv')
    el.style.display = 'none'

    document.body.appendChild(el)
    el.click()
    document.body.removeChild(el)
  }

  render () {

    const {
      saved,
      restore,
      clear,
    } = this.props

    const {
      record,
    } = this.state

    return (
      <div>
        <h2>{'Saved heaps'}</h2>
        <div
          className='f f-center'
          style={{ marginBottom: 20 }}
        >
          <button
            className='link'
            onClick={::this.saveHeaps}
          >
            {'save current'}
          </button>
          <span style={{ margin: '0 10px' }}>
            {' - '}
          </span>
          <label className='f f-center'>
            <input
              type='checkbox'
              checked={record}
              style={{ marginRight: 5 }}
              onChange={() => this.setState({ record: !record })}
            />
            {'record'}
          </label>
          {saved.length > 0 && [
            <span key={1} style={{ margin: '0 10px' }}>
              {' - '}
            </span>,
            <button
              key={2}
              className='link'
              onClick={::this.exportCSV}
            >
              {'export to CSV'}
            </button>,
            <span key={3} style={{ margin: '0 10px' }}>
              {' - '}
            </span>,
            <button
              key={4}
              className='link danger'
              onClick={clear}
            >
              {'clear'}
            </button>,
          ]}
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
