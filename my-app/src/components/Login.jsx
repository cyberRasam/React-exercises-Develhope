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

    clickHandler = () => {
        const { username, password, remember } = this.state;
        this.props.onLogin({ username, password, remember });
    }

  render() {
    const {username, password} = this.state;
    const isDisabled = !username || !password;

    return (
      <div className='login'>
        
        <input type="text" name="username" onChange={this.handleChange}/>
        <input type="password" name="password" onChange={this.handleChange}/>
        <input type="checkbox"  name="remember" onChange={this.handleChange}/> 
        <button onLogin={this.clickHandler} disabled={isDisabled}>Login</button>
      </div>
    )
  }
}

export default Login

