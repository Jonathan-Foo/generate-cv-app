import React, { Component } from 'react'
import Input from '../utilities/Input';
import Button from '../utilities/Button';

export default class ExpItems extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    return (
      <div>
        <Input value={this.props.position} type="text" placeholder="Position" />
        <Input value={this.props.company} type="text" placeholder="Company" />
        <Input value={this.props.city} type="text" placeholder="City" />
        <Input value={this.props.from} type="number" placeholder="From" />
        <Input value={this.props.to} type="number" placeholder="To" />
        <Button className="delete-div" btnName="REMOVE" onClick={this.props.onClick}/>
     </div>
    )
  }
}
