import React, { Component } from 'react'
import LabelInput from '../utilities/LabelInput';
import FileInput from '../utilities/FileInput';
import TextAreaInput from '../utilities/TextAreaInput';

export default class PersonalInfo extends Component {
    constructor(props) {
        super(props);
    }

   render() {
    return (
      <div className='form-info'>
          <p className='form-title'>Personal Information</p>
          <div>
            <LabelInput name='First Name' id='first-name'  type='text'/>
            <LabelInput name='Last Name' id='second-name' type='text'/>
            <LabelInput name='Title' id='title' type='text'/>
            <FileInput name='Photo' id='file' class='file-display' />
            <LabelInput name='Address' id='address' type='text'/>
            <LabelInput name='Email' id='Email' type='email'/>
            <TextAreaInput name='Description' id='description'/>
          </div>
      </div>
    )
  }
}
