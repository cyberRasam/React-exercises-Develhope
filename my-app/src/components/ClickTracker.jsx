import React, { Component } from 'react'

export class ClickTracker extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            lastClick: null
        }
    }

    handleClick = (event) => {
        const lastClicked = event.target.textContent
        this.setState (
           {lastClick : lastClicked }
        )
    }

  render() {
    return (
      <div>
        <h1>Last clicked button: {this.state.lastClick}</h1>
        <button onClick={this.handleClick}>Button 1</button>
        <button onClick={this.handleClick}>Button 2</button>
        <button onClick={this.handleClick}>Button 3</button>
      </div>
    )
  }
}

export default ClickTracker
