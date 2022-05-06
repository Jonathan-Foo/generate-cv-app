import React, { Component } from 'react'

export default class TextAreaInput extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    const handleChange = (e) => {
      const changeFunc = this.props.onChange
      return changeFunc(e)
    }

    return (
      <>
        <label htmlFor={this.props.id}>{this.props.name}</label>
        <textarea id={this.props.id} cvref={this.props.cvref} onChange={(e) => handleChange(e)} value={this.props.value}></textarea>
      </>
    )
  }
}

// value={this.props.value}

