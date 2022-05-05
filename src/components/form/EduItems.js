import React, { Component } from 'react'
import Input from '../utilities/Input';
import Button from '../utilities/Button';

export default class EduItems extends Component {
    constructor(props) {
        super(props);
        }

  render() {
    const {id, uniName, city, degree, subject, from, to } = this.props.payload 
    
    return (
      <div>
        <Input value={uniName} type="text" placeholder="University Name" />
        <Input value={city} type="text" placeholder="City" />
        <Input value={degree} type="text" placeholder="Degree" />
        <Input value={subject} type="text" placeholder="Subject" />
        <Input value={from} type="number" placeholder="From" />
        <Input value={to} type="number" placeholder="To" />
        <Button className="delete-div" btnName="REMOVE" onClick={this.props.onClick}/>
     </div>
    )
  }
}
