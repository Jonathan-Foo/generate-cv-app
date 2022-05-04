import React, { Component } from 'react'


export default class DisExpItem extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div className="info-style2">
        <div className="time">
          <p className="info-bold">{this.props.payload.from} - {this.props.payload.to}</p>
        </div>
        <div className="detail">
          <p className="info-bold">{this.props.payload.position}</p>
          <p className="info-subtext">{this.props.payload.company}</p>
        </div>
      </div>
    )
  }
}
