import React, { Component, useState } from 'react';

// export class Login extends Component {
//     constructor(props) {
//         super(props) 
//         this.state = {
//             name : '', 
//             password: '', 
//             remember: false
//         }
//     }


//     handleChange = (event) => {
//         const name = event.target.name
//         const value = name === "remember" ? event.target.checked : event.target.value
        

//         this.setState({
//             [name] : value
//         })
//     }

//     clickHandler = () => {
//         const { username, password, remember } = this.state;
//         this.props.onLogin({ username, password, remember });
//     }

//     handleReset = () => {
//         this.setState ({
//             username : '', 
//             password : '',
//             remember : false
//         })
//     }

//   render() {
//     const {username, password} = this.state;
//     const isDisabled = !username || !password;
//     const myStyle = {
//       backgroundColor : this.state.password.length >= 8 ? "green" : "red"  
//     }
//     return (
//       <div className='login'>
        
//         <input type="text" name="username" onChange={this.handleChange} value={this.state.username}/>
//         <input type="password" name="password" onChange={this.handleChange} value={this.state.password}/>
//         <input type="checkbox"  name="remember" onChange={this.handleChange} checked={this.state.remember}/> 
//         <button style={myStyle} onLogin={this.clickHandler} disabled={isDisabled}>Login</button>
//         <button type="reset" onClick={this.handleReset}>Reset</button>
//       </div>
//     )
//   }
// }

// export default Login

export const Login = () => {
  const [data, setData] = useState({
    username: '',
    password: '',
    remember: false
  })

  function handleInput(event) {
    const {name, type, checked, value }= event.target
    setData ((data) => {
      return {
        ...data,
        [name] : type === "checkbox" ? checked : value,
      }
    })
  }
  console.log(data)
  return (
    <div>
      <input type="text" value={data.username} name="username" onChange={handleInput}/>
      <input type="text" value={data.password} name="password" onChange={handleInput} />
      <input type="checkbox" name="remember" checked={data.remember} onChange={handleInput}/>
      
    </div>
  )
}
export default Login;
