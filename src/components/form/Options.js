import React, { Component } from 'react'
import Button from '../utilities/Button'
import ReactToPrint from 'react-to-print'

export default class Options extends Component {
    constructor(props) {
        super(props)
    }

  render() {
    return (
      <div className='complete-options'>
        <ReactToPrint trigger={() => {return <Button className='create-pdf' btnName='CREATE PDF'/>}} content = {() => this.props.componentRef}/>
        <Button className='example' btnName='LOAD EXAMPLE' onClick={this.props.handleExample}/>
        <Button className='clear' btnName='RESET' onClick={this.props.handleReset}/>
      </div>
    )
  }
}
