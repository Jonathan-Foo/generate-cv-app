import React, { Component } from 'react'
import Button from '../utilities/Button'

export default class Options extends Component {
    constructor(props) {
        super(props)
    }

  render() {
    return (
      <div className='complete-options'>
        <Button className='create-pdf' btnName='CREATE PDF' onClick={this.props.handlePDF}/>
        <Button className='example' btnName='LOAD EXAMPLE' onClick={this.props.handleExample}/>
        <Button className='clear' btnName='RESET' onClick={this.props.handleReset}/>
      </div>
    )
  }
}
