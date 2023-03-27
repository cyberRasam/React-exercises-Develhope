import React, { Component } from 'react'

export class Container extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        {this.props.children}
      </div>
    )
  }
}

export default Component
