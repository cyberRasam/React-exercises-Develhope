import React, { Component } from 'react'

export class Container extends Component {
  render() {
    return (
      <div className='bg-blue border-4 border-red-500'>
        {this.props.children}
      </div>
    )
  }
}

export default Container
