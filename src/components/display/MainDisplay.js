import React, { Component } from 'react'
import DisplayHeader from './DisplayHeader'
import Content from './Content'

export default class MainDisplay extends Component {
    constructor(props) {
        super(props)
    }

  render() {
    return (
      <div className='left-display' id='print-section'>
          <DisplayHeader firstName='Bob' secondName='Smith' title='Senior Web Developer'/>
          <Content />
        
      </div>
    )
  }
}


// all props pass to display are just example thee should be more like this.props.firstName this.props.secondName this.props.title date pass from the state from Main.js itself 
