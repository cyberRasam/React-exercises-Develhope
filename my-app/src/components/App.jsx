import React from 'react';
import { Container } from './Container';

import ClickCounter from './ClickCounter';
import ClickTracker from './ClickTracker';
import Colors from './Colors';

import { Counter } from './Counter';
import { Hello } from './Hello';
import InteractiveWelcome from './InteractiveWelcome';
import Login from './Login';
import ToDoList from './ToDoList';
import UncontrolledLogin from './UncontrolledLogin';
import { Welcome } from './Welcome';


export class App extends React.Component {
  render() {
    const persons = [
      {id: 1, name: "Rasam"},
      {id: 2, name: "Roham"},
      {id: 3, name: "Shy"},
      {id: 4, name: "Behdad"}
    ]
    return (
      <div>

        <Container>
        <Hello />
        {/* <Welcome name="John" age={19} /> */}
        <ClickCounter />
        <Counter initialValue={10} incTime={500} incAmount={30}></Counter>
        <ClickTracker />
        <InteractiveWelcome /> 
        <Login  />
        <UncontrolledLogin /> 
        <Colors items={persons}/> 
        </Container>
        {/* <ToDoList render={(items, handleRemove) => (
          <ul>
            {items.map((todo, index) => (
              <li key={index}>
                {todo}
                <button type='button' onClick={()=> handleRemove(index)}>Remove</button>
              </li>
            ))}
          </ul>
        )} /> */}

        

      </div>
    );
  }
}
