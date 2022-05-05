import React, { Component } from 'react'

export default class Button extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <button id={this.props.id} type='button' onClick={this.props.onClick} className={this.props.className}>{this.props.btnName}</button>
        )
    }
}


// differences between buttons are: color, text, and their functions