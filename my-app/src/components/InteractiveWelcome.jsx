import React, { Component } from 'react'
import { Welcome } from './Welcome'

export class InteractiveWelcome extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            name : ''
        }
    }

    handleChange = (event) => {
        const name = event.target.value 

        this.setState( {
            name: name
        })
    }

  render() {
    return (
      <div>

        <input type="text" name='name' onChange={this.handleChange}/>
        <Welcome name={this.state.name} />
      </div>
    )
  }
}

export default InteractiveWelcome
