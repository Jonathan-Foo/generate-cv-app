import React, { Component } from 'react'
import DisplaySubSection from '../utilities/DisplaySubSection'
import pfp from '../assets/pfp.jpg'

export default class DisplayRight extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="display-right">
        <img src={this.props.personalInfo.profileImage} alt="profile image" />
        <div className="general-info-display">
          <p className="section-title">Personal Details</p>
          <div className="line"></div>
          <DisplaySubSection title='Address' info={this.props.personalInfo.address} />
          <DisplaySubSection title='Phone Number' info={this.props.personalInfo.phoneNumber} />
          <DisplaySubSection title='Email' info={this.props.personalInfo.email} />
        </div>
      </div>
    )
  }
}


