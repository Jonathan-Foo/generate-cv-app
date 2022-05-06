import React, { Component } from 'react'
import EduItems from './EduItems'
import FormSection from '../utilities/FormSection'

export default class Education extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const educationArr = this.props.educationInfo
    const educetionItems = educationArr.map(payload => {
      return <EduItems handleInfoChange={this.props.handleInfoChange} handleRemove={this.props.handleRemove} key={payload.id} payload={payload}/>
    })

    return (
      <FormSection id='education' formTitle="Education" onClick={this.props.handleAdd}>
            {educetionItems}
        </FormSection>  
    )
  }
}
