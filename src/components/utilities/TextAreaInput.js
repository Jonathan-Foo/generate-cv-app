import React, { Component } from 'react'

export default class TextAreaInput extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
      <>
        <label htmlFor={this.props.id}>{this.props.name}</label>
        <textarea id={this.props.id} cvref={this.props.cvref} onChange={this.props.onChange} value={this.props.value}></textarea>
      </>
    )
  }
}

// value={this.props.value}

