import React, { Component } from 'react'

export class Colors extends Component {
  render() {
    const colors = this.props.items.map(e => <li>{e}</li>)
    return (
      <div>
        <ul>
            {colors}
        </ul>
      </div>
    )
  }
}

export default Colors
