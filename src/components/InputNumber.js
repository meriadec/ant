import React, { Component } from 'react'

class InputNumber extends Component {

  handleChange (v) {

    const {
      min,
      max,
      onChange,
    } = this.props

    if (v < min || v > max) { return }

    onChange(v)

  }

  render () {

    const {
      value,
    } = this.props

    return (
      <div className='InputNumber'>
        <button
          onClick={() => this.handleChange(value - 1)}
          type='button'
          className='InputNumber--arrow'
        >
          {'-'}
        </button>
        <div className='InputNumber--input'>
          {value}
        </div>
        <button
          onClick={() => this.handleChange(value + 1)}
          type='button'
          className='InputNumber--arrow'
        >
          {'+'}
        </button>
      </div>
    )
  }

}

export default InputNumber
