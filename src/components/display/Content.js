import React, { Component } from 'react'
import DisplayLeft from './DisplayLeft'
import DisplayRight from './DisplayRight'

export default class Content extends Component {
    constructor(props){
        super(props)
    }

  render() {
    return (
        <div className='content'>
            <DisplayLeft personalInfo={this.props.personalInfo} experience={this.props.experience} education={this.props.education}/>
            <DisplayRight personalInfo={this.props.personalInfo}/>
        </div>
    )
  }
}
