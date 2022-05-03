import React, { Component } from 'react'
import Input from '../utilities/Input';
import Button from '../utilities/Button';

export default class EduItems extends Component {
    constructor(props) {
        super(props);
        }

  render() {
    return (
      <div>
        <Input value={this.props.city} type="text" placeholder="City" />
        <Input value={this.props.degree} type="text" placeholder="Degree" />
        <Input value={this.props.city} type="text" placeholder="Subject" />
        <Input value={this.props.from} type="number" placeholder="From" />
        <Input value={this.props.to} type="number" placeholder="To" />
        <Button className="delete-div" btnName="REMOVE" onClick={this.props.onClick}/>
     </div>
    )
  }
}
