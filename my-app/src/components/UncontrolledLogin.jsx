import React, { Component, createRef } from 'react'

export class UncontrolledLogin extends Component {

    _formRef = createRef()
    _usernameRef = createRef()

    componentDidMount() {
        this._usernameRef.current.focus()
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;
        const remember = event.target.elements.remember.checked;

        console.log(
            {username, password, remember}
        )
    }

    handlePrefill = () => {
        this._formRef.current.elements.username.value = "Rasam";
        this._formRef.current.elements.password.value = "password";
        this._formRef.current.elements.remember.checked = true
    }
 
  render() {
    return (
      <div>
        <form ref={this._formRef} onSubmit={this.handleSubmit}>
            <input name='username' ref={this._usernameRef} />
            <input name='password' type='password' />
            <input name='remember' type='checkbox' /> 
            <button type='submit'>Login</button>
            <button type='reset'>Reset</button>
            <button type='button' onClick={this.handlePrefill}>Prefill</button>
        </form>
      </div>
    )
  }
}

export default UncontrolledLogin
