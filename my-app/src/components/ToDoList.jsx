import React, { Component } from 'react'

// export class ToDoList extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             items: [],
//             todo : ''
//         }
//     }


//     handleInputChange = (event) => {
//         const todo = event.target.value;
//         this.setState({
//             todo: todo
//         })
//     }

//     clickHandler = (e) => {
//         e.preventDefault()
//         const todo = this.state.todo
//         this.setState({
//             items: [...this.state.items, todo],
//             todo: ''
//         })
//     }


//     resetHandler = (e) => {
//       this.setState({
//         items: []
//       })
//     }

//     handleRemove = (index) => {
//       const items = [...this.state.items]
//       items.splice(index, 1)

//       this.setState({
//         items: items
//       })
//     } 

//   render() {
    
//     const {items} = this.state
//     return (
//       <div>
//         <input type="text" name="toDo" value={this.state.todo} onChange={this.handleInputChange} />
//         <button type='button' onClick={this.clickHandler}>Add ToDo</button> 
//         <button type='button' onClick={this.resetHandler}>Reset</button>
//         {/* <ul>
//             {this.state.items.map(
//             (element, index) => 
//               <li key={index}>
//                 {element}
//                 <button type='button' onClick={this.handleRemove}>Remove</button>
//               </li>
//               )
//             }
//         </ul> */}
//         {this.props.children(items, this.handleRemove)}

//       </div>
//     )
//   }
// }

export const ToDoList = () => {
  return (
    <div></div>
  )
}


export default ToDoList
