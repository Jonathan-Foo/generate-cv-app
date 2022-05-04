import React, { Component } from 'react'
import MainForm from './form/MainForm'
import MainDisplay from './display/MainDisplay'
import ExampleCV from './utilities/ExampleCV'
import EmptyCV from './utilities/EmptyCV'


export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state={
            cvInfo: EmptyCV
        }
    }

    render() {
        return (
            <div className='main-content'>
                <MainDisplay cvInfo={this.state.cvInfo}/>
                <MainForm />
            </div>
        )
    }
}
