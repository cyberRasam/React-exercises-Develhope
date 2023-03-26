import React, { Component } from 'react';

export class Login extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            name : '', 
            password: '', 
            remember: false
        }
    }

    handleChange = (event) => {
        const name = event.target.name
        const value = name === "remember" ? event.target.checked : event.target.value
        

        this.setState({
            [name] : value
        })
    }

  render() {
    return (
      <div className='login'>
        
        <input type="text" name="username"/>
        <input type="password" name="password" />
        <input type="checkbox"  name="remember"/>
      </div>
    )
  }
}

export default Login

