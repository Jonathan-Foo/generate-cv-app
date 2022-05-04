import React, { Component } from 'react'
import DisplaySection from '../utilities/DisplaySection'

export default class Description extends Component {
    constructor(props) {
        super(props)
    }

  render() {
    return (
        <DisplaySection className='description' title='Description'>
        <p className="info-style1">
            {this.props.personalInfo.description}
        </p>
        </DisplaySection> 
    )
  }
}
