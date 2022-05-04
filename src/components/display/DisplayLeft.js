import React, { Component } from 'react'
import Description from './Description'
import DisEducation from './DisEducation'
import DisExperience from './DisExperience'

export default class DisplayLeft extends Component {
    constructor(props) {
        super(props)
    }
    
  render() {
    return (
      <div className='display-left'>
        <Description personalInfo={this.props.personalInfo}/> 
        <DisExperience experience={this.props.experience}/>
        <DisEducation education={this.props.education}/>
      </div>
    )
  }
}


