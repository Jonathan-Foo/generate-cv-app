import React, { Component } from 'react'

export default class FileInput extends Component {
    constructor(props) {
        super(props);
        }
    

  render() {
    return (
      <>
        <label htmlFor={this.props.id}>{this.props.name}</label>
        <label className={this.props.class} htmlFor={this.props.id}>
            <input type="file" id={this.props.id} onChange={this.props.onChange}/>
        </label>
      </>
    )
  }
}

{/* <label for="file">Photo</label>
<label class="file-display" for="file"
  ><input class="form-file-input" type="file" id="file"
/></label> */}