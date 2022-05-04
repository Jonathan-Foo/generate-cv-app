import React, { Component } from 'react'

export default class TextAreaInput extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
      <>
        <label htmlFor={this.props.id}>{this.props.name}</label>
        <textarea id={this.props.id} onChange={this.props.onChange}></textarea>
      </>
    )
  }
}

// value={this.props.value}

