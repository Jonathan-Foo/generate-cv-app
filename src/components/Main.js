import React, { Component } from 'react'
import MainForm from './form/MainForm'
import MainDisplay from './display/MainDisplay'

export default class Main extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className='main-content'>
                <MainDisplay />
                <MainForm />
            </div>
        )
    }
}
