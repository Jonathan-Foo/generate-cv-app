import React, { Component } from 'react'
import MainForm from './form/MainForm'
import MainDisplay from './display/MainDisplay'
import ExampleCV from './utilities/ExampleCV'
import EmptyCV from './utilities/EmptyCV'
import { FaThList } from 'react-icons/fa'
import emptyCV from './utilities/EmptyCV'
import { v4 as uuidv4 } from 'uuid';


export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state= emptyCV

        this.displayRef= React.createRef()
    }

    handleRemove() {

    }
    render() {
        const handleReset = () => {
            this.setState({cvInfo: EmptyCV})
        }

        const handleExample = () => {
            this.setState({cvInfo: ExampleCV})
        }

        const handlePersonalInfo = (e) => {
            const {id, value, type} = e.target
            if (type === 'file') {
                handleImageUpload(e)
                return
            }
            
            this.setState(prevState => {return {
                ...prevState,
                personalInfo: {
                    ...prevState.personalInfo,
                    [id]: value,
                  }
                }}
            )
    
        
        }
    
        const handleImageUpload = (e) => {
             const { id } = e.target
             const file = e.target.files[0]
    
             if(!file) return
    
            const reader = new FileReader();
            reader.onload = () => {
                this.setState(prevState => {return {
                    ...prevState,
                    personalInfo: {
                        ...prevState.personalInfo,
                        [id]: reader.result,
                      }
                    }}
                )
            
            }
            reader.readAsDataURL(file)
        }

        const handleAdd = (e) => {
            const { id } = e.target
            console.log(e.target)
            if (id === 'education') {
                this.setState(prevState => {return {
                    ...prevState,
                    education: [...prevState.education, {
                        id: uuidv4(),
                        uniName: '',
                        city: '',
                        degree: '',
                        subject: '',
                        from: '',
                        to: '', 
                    },]
                }})
            } else {
                this.setState(prevState => {return {
                    ...prevState,
                    experience: [...prevState.experience, {
                        id: uuidv4(),
                        position: '',
                        company: '',
                        city: '',
                        from: '',
                        to: '',   
                    },]
                }})
            }
        }


        return (
            <div className='main-content'>
                <MainDisplay ref={this.displayRef} cvInfo={this.state}/>
                <MainForm 
                    cvInfo={this.state} 
                    handlePersonalInfo={handlePersonalInfo} 
                    handleReset={handleReset} 
                    handleExample={handleExample} 
                    componentRef={this.displayRef}
                    handleAdd={handleAdd}/>
            </div>
        )
    }
}
