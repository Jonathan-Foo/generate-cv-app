import React, { Component } from 'react'
import Input from '../utilities/Input';
import Button from '../utilities/Button';

export default class ExpItems extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    const {id, position, company, city, from ,to} = this.props.payload 

    const removeSection = (e, section) => {
      const removeFunc = this.props.handleRemove
      return removeFunc(e, section)
    }

    const handleInputChange = (e, section, id) => {
      const inputChange = this.props.handleInfoChange  
      return inputChange(e, section, id)
    }
    

    return (
      <div>
        <Input name='position' value={position} type="text" placeholder="Position" onChange={(e) => handleInputChange(e, 'experience', id)}/>
        <Input name='company' value={company} type="text" placeholder="Company" onChange={(e) => handleInputChange(e, 'experience', id)}/>
        <Input name='city' value={city} type="text" placeholder="City" onChange={(e) => handleInputChange(e, 'experience', id)}/>
        <Input name='from' value={from} type="number" placeholder="From" onChange={(e) => handleInputChange(e, 'experience', id)}/>
        <Input name='to' value={to} type="number" placeholder="To" onChange={(e) => handleInputChange(e, 'experience', id)}/>
        <Button id={id} className="delete-div" btnName="REMOVE" onClick={(e) => removeSection(e, 'experience')}/>
     </div>
    )
  }
}
