import React, { Component } from 'react'

export class Colors extends Component {
  render() {
    const persons = this.props.items.map((person) => <li key={person.id}>{person.name}</li>)
    return (
      <div>
        <ul>
            {persons}
        </ul>
      </div>
    )
  }
}

export default Colors
