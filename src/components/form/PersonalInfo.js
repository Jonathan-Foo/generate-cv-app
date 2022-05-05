import React, { Component } from 'react'
import LabelInput from '../utilities/LabelInput';
import FileInput from '../utilities/FileInput';
import TextAreaInput from '../utilities/TextAreaInput';

export default class PersonalInfo extends Component {
    constructor(props) {
        super(props);
    }

   render() {
    const { firstName, lastName, title, profileImage, address, phoneNumber, email, description } = this.props.personalInfo

    return (
      <div className='form-info'>
          <p className='form-title'>Personal Information</p>
          <div>
            <LabelInput name='First Name' id='firstName'  type='text' value={firstName} onChange={this.props.handlePersonalInfo}/>
            <LabelInput name='Last Name' id='lastName' type='text' value={lastName}  onChange={this.props.handlePersonalInfo}/>
            <LabelInput name='Title' id='title' type='text' value={title}  onChange={this.props.handlePersonalInfo}/>
            <FileInput name='Photo' id='profileImage' class='file-display' value={profileImage}  onChange={this.props.handlePersonalInfo}/>
            <LabelInput name='Address' id='address' value={address}  type='text'  onChange={this.props.handlePersonalInfo}/>
            <LabelInput name='Phone Number' id='phoneNumber' value={phoneNumber}  type='text'  onChange={this.props.handlePersonalInfo}/>
            <LabelInput name='Email' id='email' value={email}  type='email'  onChange={this.props.handlePersonalInfo}/>
            <TextAreaInput name='Description' value={description} id='description' onChange={this.props.handlePersonalInfo}/>
          </div>
      </div>
    )
  }
}
