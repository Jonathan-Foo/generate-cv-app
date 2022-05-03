import React, { Component } from 'react'
import Button from './Button';

export default class FormSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='form-info'>
                <p className='form-title'>{this.props.formTitle}</p>
                {this.props.children}
                <Button onClick={this.props.onClick} btnName="ADD" className="add-div"/>
            </div>
        )
    }
}
