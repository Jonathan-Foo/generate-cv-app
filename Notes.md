Every text, email, number input needs a onChange, where the function triggers a this.setState(), updating state as user change the form

add buttons found within the Experience and Education section need a onClick function which trigger this.setState([...experience, {id: uuid4(), position: '', company: '', city: '', from: '', to: ''}])

creating new copy for section for users to enter new information

every new section has its own delete button should have an onClick function that removes it from state using it's id, that need to provides an index inorder to slice the originial experience
or education array and create the new state

In options
the 'CREATE PDF' button use react-to-printo print the main display component
the 'LOAD EXAMPLE' button has an onClick function that triggers a this.setState() function with prefilled state info stored in Utils
the 'RESET' button has an onClick function that triggers a this.setState() function with a template of an empty state

imageHandler function used to push user uploaded imaget to state

imageHandler = (e) => {
const reader = new FileReader();
reader.onload = () => {
if (reader.readyState === 2){
this.setState({profileImage: reader.result})
}
}
reader.readAsDataURL(e.target.files[0])
}

an then input for upload needs an onChange() function that triggers this imageHandler function
