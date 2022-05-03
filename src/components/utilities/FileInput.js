import React, { Component } from 'react'

export default class FileInput extends Component {
    constructor(props) {
        super(props);
        }
    

  render() {
    return (
      <>
        <label for={this.props.labelID}>{this.props.labelName}</label>
        <label className={this.props.class} for={this.props.labelID}>
            <input type="file" for={this.props.labelID} id={this.props.labelID}/>
        </label>
      </>
    )
  }
}

{/* <label for="file">Photo</label>
<label class="file-display" for="file"
  ><input class="form-file-input" type="file" id="file"
/></label> */}