import React, { Component } from 'react'
import PersonalInfo from './PersonalInfo'
import Experience from './Experience'
import Education from './Education'
import Options from './Options'

export default class MainForm extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {personalInfo, experience, education} = this.props.cvInfo

    return (
      <div className='right-form'>
        <form action="#" autoComplete='off'>
        <PersonalInfo handlePersonalInfo={this.props.handlePersonalInfo} personalInfo={personalInfo} />
        <Experience experienceInfo={experience} handleAdd={this.props.handleAdd} handleRemove={this.props.handleRemove} handleInfoChange={this.props.handleInfoChange}/>
        <Education educationInfo={education} handleAdd={this.props.handleAdd} handleRemove={this.props.handleRemove} handleInfoChange={this.props.handleInfoChange}/>
        <Options handleReset={this.props.handleReset} handleExample={this.props.handleExample} componentRef={this.props.componentRef.current}/>
        </form>
      </div>
    )
  }
}
