import React, { Component } from 'react'
import MainForm from './form/MainForm'
import MainDisplay from './display/MainDisplay'
import ExampleCV from './utilities/ExampleCV'
import EmptyCV from './utilities/EmptyCV'



export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state= {
            cvInfo: EmptyCV
        }

        this.displayRef= React.createRef()
    }

    handleRemove() {

    }

    handleAdd() {

    }

    handleImageUpload() {

    }

    

   

   

    render() {
        const handleReset = () => {
            this.setState({cvInfo: EmptyCV})
        }

        const handleExample = () => {
            this.setState({cvInfo: ExampleCV})
        }

        const handleCreatePDF = () => {

        }
    

        return (
            <div className='main-content'>
                <MainDisplay ref={this.displayRef} cvInfo={this.state.cvInfo}/>
                <MainForm handleReset={handleReset} handleExample={handleExample} componentRef={this.displayRef}/>
            </div>
        )
    }
}
