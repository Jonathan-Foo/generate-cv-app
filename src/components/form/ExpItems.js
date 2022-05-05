import React, { Component } from 'react'
import Input from '../utilities/Input';
import Button from '../utilities/Button';

export default class ExpItems extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    const {id, position, company, city, from ,to} = this.props.payload 

    return (
      <div>
        <Input value={position} type="text" placeholder="Position" />
        <Input value={company} type="text" placeholder="Company" />
        <Input value={city} type="text" placeholder="City" />
        <Input value={from} type="number" placeholder="From" />
        <Input value={to} type="number" placeholder="To" />
        <Button className="delete-div" btnName="REMOVE" onClick={this.props.onClick}/>
     </div>
    )
  }
}
