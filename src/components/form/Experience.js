import React, { Component } from 'react'
import ExpItems from './ExpItems'
import Button from '../utilities/Button'
import FormSection from '../utilities/FormSection'

export default class Experience extends Component {
    constructor(props) {
        super(props);
    }
    
  render() {
    const experienceArr = this.props.experienceInfo
    const experienceItems = experienceArr.map(payload => {
      return <ExpItems key={payload.id} payload={payload}/>
    })

    return (
        <FormSection id='experience' formTitle='Experience' onClick={this.props.handleAdd}>
            {experienceItems}
        </FormSection>  
    )
  }
}
