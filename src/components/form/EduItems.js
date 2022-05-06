import React, { Component } from 'react'
import Input from '../utilities/Input';
import Button from '../utilities/Button';

export default class EduItems extends Component {
    constructor(props) {
        super(props);
        }

  render() {
    const {id, uniName, city, degree, subject, from, to } = this.props.payload 

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
        <Input name='uniName' value={uniName} type="text" placeholder="University Name" onChange={(e) => handleInputChange(e, 'education', id)} />
        <Input name='city' value={city} type="text" placeholder="City" onChange={(e) => handleInputChange(e, 'education', id)}/>
        <Input name='degree' value={degree} type="text" placeholder="Degree" onChange={(e) => handleInputChange(e, 'education', id)}/>
        <Input name='subject' value={subject} type="text" placeholder="Subject" onChange={(e) => handleInputChange(e, 'education', id)}/>
        <Input name='from' value={from} type="number" placeholder="From" onChange={(e) => handleInputChange(e, 'education', id)}/>
        <Input name='to'value={to} type="number" placeholder="To" onChange={(e) => handleInputChange(e, 'education', id)}/>
        <Button id={id} className="delete-div" btnName="REMOVE" onClick={(e) => removeSection(e, 'education')}/>
     </div>
    )
  }
}
