import React, { Component } from 'react'
import DisplaySection from '../utilities/DisplaySection'
import DisEduItem from './DisEduItem'

export default class DisEducation extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const educationArr = this.props.education
    const educationItems = educationArr.map(payload => {
      return <DisEduItem
        key={payload.id}
        payload={payload}
      />
    })


    return (
      <DisplaySection className='education' title='Education'>
        {educationItems}
        
      </DisplaySection>
    )
  }
}
