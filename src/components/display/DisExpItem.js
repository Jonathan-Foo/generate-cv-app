import React, { Component } from 'react'


export default class DisExpItem extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <div class="info-style2">
        <div class="time">
          <p class="info-bold">{this.props.payload.from} - {this.props.payload.to}</p>
        </div>
        <div class="detail">
          <p class="info-bold">{this.props.payload.position}</p>
          <p class="info-subtext">{this.props.payload.company}</p>
        </div>
      </div>
    )
  }
}
