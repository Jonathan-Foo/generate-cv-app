import React, { Component } from 'react'

export default class DisplayHeader extends Component {
    constructor(props) {
        super(props)
    }

  render() {
    return (
      <div className='display-header'>
          <p className='name'>{this.props.firstName} {this.props.secondName}</p>
          <p className='title'>{this.props.title}</p>
      </div>
    )
  }
}
