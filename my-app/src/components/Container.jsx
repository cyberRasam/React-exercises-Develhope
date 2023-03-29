import React, { Component } from 'react'

export class Container extends Component {
  render() {
    return (
      <div className='bg-blue border-4 border-red-500'>
        <div>
          <h1 className='h1'>{this.props.title}</h1>
        </div>
        <div>{this.props.children}</div>
      </div>
    )
  }
}

export default Container
