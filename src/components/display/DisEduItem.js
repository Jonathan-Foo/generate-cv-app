import React, { Component } from 'react'

export default class DisEduItem extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      
      <div className="info-style2">
        <div className="time">
          <p className="info-bold">{this.props.payload.from} - {this.props.payload.to}</p>
        </div>
        <div className="detail">
          <p className="info-bold">{this.props.payload.uniName}, {this.props.payload.city}</p>
          <p className="info-subtext">Degree: {this.props.payload.degree}</p>
          <p className="info-subtext">Subject:  {this.props.payload.subject}</p>
        </div>
      </div>
 
    )
  }
}
