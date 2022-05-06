import React, { Component } from 'react'
import Input from './Input';

export default class LabelInput extends Component {
    constructor(props) {
        super(props);
        }
        
  render() {
    const handleChange = (e) => {
      const changeFunc = this.props.onChange
      return changeFunc(e)
    }

    return (
      <>
      <label htmlFor={this.props.id}>{this.props.name}</label>
      <Input id={this.props.id} type={this.props.type} value={this.props.value} onChange={(e) => handleChange(e)}/>
      </>
    )
  }
}


// onChange={this.props.handleChange}