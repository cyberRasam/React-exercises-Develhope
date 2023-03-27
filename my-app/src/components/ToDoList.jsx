import React, { Component } from 'react'

export class ToDoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items: ["shopping", "running"],
            todo : ''
        }
    }


    handleInputChange = (event) => {
        const todo = event.target.value;
        this.setState({
            todo: todo
        })
    }

    clickHandler = (e) => {
        e.preventDefault()
        const todo = this.state.todo
        this.setState({
            items: [...this.state.items, todo],
            todo: ''
        })
    }


  render() {
    const ourList = this.state.items.map(e=> <li>{e}</li>)
    
    return (
      <div>
        <input type="text" name="toDo" value={this.state.todo} onChange={this.handleInputChange} />
        <button type='button' onClick={this.clickHandler}>Add ToDo</button>
        <ul>
            {ourList}
        </ul>
      </div>
    )
  }
}

export default ToDoList
