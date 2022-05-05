import React, { Component } from 'react'
import Button from './Button';

export default class FormSection extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const addSection = (e) => {
            const addFunction = this.props.onClick
            return addFunction(e)
          }

        return (
            <div className='form-info'>
                <p className='form-title'>{this.props.formTitle}</p>
                {this.props.children}
                <Button id={this.props.id} onClick={(e) => addSection(e)} btnName="ADD" className="add-div"/>
            </div>
        )
    }
}
