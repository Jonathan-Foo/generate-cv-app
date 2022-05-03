import React, { Component } from 'react'
import EduItems from './EduItems'
import FormSection from '../utilities/FormSection'

export default class Education extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <FormSection formTitle="Education">
            {this.props.children}
            <EduItems />
        </FormSection>  
    )
  }
}
