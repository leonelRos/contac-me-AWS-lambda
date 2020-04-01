import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

class Form extends Component {
  state = {
    formData: {
      name: '',
      email: '',
      message: ''
    },
    inputFiledCheck: false
  }


  checkFields = () => {
    const { formData } = this.state;

    if(!formData.name || !formData.email || !formData.message){
      console.log('please enter required field*')
      return false
    } else {
      this.setState({
        inputFiledCheck: true
      })
      return true
    }
  }

  handleChange = e => {
    const { formData } = this.state;
    formData[e.currentTarget.name] = e.currentTarget.value
    this.setState({ formData });
  }

  handleSubmit = async(e) => {
    try {
      e.preventDefault()
      await this.checkFields()
      if(this.state.inputFiledCheck){
        this.setState({
          name: '',
          email: '',
          message: '',
          inputFiledCheck: false
        })
        // send to lamda
        // console.log(this.state.formData)
        console.log('lamda')
      }
    } catch(err) {
      return "please enter required field"
    }
  }


  render(){
    const { inputFiledCheck } = this.state
    const { name, email, message } = this.state.formData
    return(
      <div>
        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator
            label="Name*"
            name="name"
            value={name}
            onChange={this.handleChange}
            validators={['required']}
            errorMessages={['this field is required']}
          ></TextValidator> <br/>

          <TextValidator
            label="Email*"
            name="email"
            value={email}
            onChange={this.handleChange}
            validators={['required', 'isEmail']}
            errorMessages={['this field is required', 'email is not valid']}
          ></TextValidator> <br/>

          <TextValidator
            label="Message*"
            name="message"
            value={message}
            onChange={this.handleChange}
            validators={['required']}
            errorMessages={['this field is required', 'email is not valid']}
          ></TextValidator> <br/> <br/>

          <Button
            color="primary"
            variant="outlined"
            type="submit"
            disabled={inputFiledCheck}
          >
            {
              (inputFiledCheck && 'Your form is submitted!')
              || (!inputFiledCheck && 'Submit')
            }
          </Button>
        </ValidatorForm>
      </div>
    )
  }
}

export default (Form)