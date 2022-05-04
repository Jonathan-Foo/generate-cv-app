import React, { Component } from 'react'

export default class DisplaySection extends Component {
    constructor(props) {
        super(props)
    }
    
  render() {
    return (
      <div className={this.props.className}> 
      <p className='section-title'>{this.props.title}</p>
      <div className='line'></div>
      {this.props.children}
      </div>
    )
  }
}
