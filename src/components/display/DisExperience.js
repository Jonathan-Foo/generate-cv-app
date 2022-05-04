import React, { Component } from 'react'
import DisplaySection from '../utilities/DisplaySection'
import DisExpItem from './DisExpItem'

export default class DisExperience extends Component {
  constructor(props){
    super(props)
  }

  render() {
    const experienceArr = this.props.experience
    const experienceItems = experienceArr.map(payload => {
      return <DisExpItem
      payload={payload}
      />
    })

    return (
      <DisplaySection className='experience' title='Experience'>
        {experienceItems}
        
      </DisplaySection>
    )
  }
}
