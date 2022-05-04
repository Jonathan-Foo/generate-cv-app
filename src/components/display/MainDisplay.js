import React, { Component } from 'react'
import DisplayHeader from './DisplayHeader'
import Content from './Content'

export default class MainDisplay extends Component {
    constructor(props) {
        super(props)
    }

  render() {
    const {personalInfo, experience, education} = this.props.cvInfo

    return (
      <div className='left-display' id='print-section'>
          <DisplayHeader personalInfo={personalInfo}/>
          <Content personalInfo={personalInfo} experience={experience} education={education}/>
      </div>
    )
  }
}


// all props pass to display are just example thee should be more like this.props.firstName this.props.secondName this.props.title date pass from the state from Main.js itself 
