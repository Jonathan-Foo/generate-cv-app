import React, { Component } from 'react'
import { FaThList } from 'react-icons/fa';

export default class Input extends Component {
    constructor(props) {
        super(props);
    }
    

  render() {
    return (
      <input id={this.props.id} type={this.props.type} placeholder={this.props.placeholder} value={this.props.value} onChange={this.props.onChange} />
    )
  }
}


// The difference between text inputs is the state they are connected to and the place holder 