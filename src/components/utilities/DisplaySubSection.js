import React, { Component } from 'react'

export default class DisplaySubSection extends Component {
    constructor(props){
        super(props)
    }

  render() {
    return (
        <div>
            <p className="info-bold">{this.props.title}</p>
            <p className="info-subtext">{this.props.info}</p>
        </div>
    )
  }
}
