import React, { Component } from 'react'
import ExpItems from './ExpItems'
import Button from '../utilities/Button'
import FormSection from '../utilities/FormSection'

export default class Experience extends Component {
    constructor(props) {
        super(props);
    }
    
  render() {
    return (
        <FormSection formTitle='Experience'>
            {this.props.children}
            <ExpItems />
        </FormSection>  
    )
  }
}
