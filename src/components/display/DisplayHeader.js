import React, { Component } from 'react'

export default class DisplayHeader extends Component {
    constructor(props) {
        super(props)
    }

  render() {
    return (
      <div className='display-header'>
          <p className='name'>{this.props.personalInfo.firstName} {this.props.personalInfo.lastName}</p>
          <p className='title'>{this.props.personalInfo.title}</p>
      </div>
    )
  }
}
