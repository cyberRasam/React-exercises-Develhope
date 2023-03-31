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
import DisplayLanguage from './DisplayLanguage';
import { LanguageContext } from './LanguageContext';
import { Sum } from './Sum';


export class App extends React.Component {
  
  state = {
    language: 'en'
  }

handleLangChange = (event) => {
  const lang = event.target.value
    this.setState({
        language: lang
    })
    
}


  render() {
    const persons = [
      {id: 1, name: "Rasam"},
      {id: 2, name: "Roham"},
      {id: 3, name: "Shy"},
      {id: 4, name: "Behdad"}
    ]
    const container_title = "The title which passed to container component"
    return (
      <div>

        {/* <Container title={container_title}>
        <Hello />
        <Welcome name="John" age={19} />
        <ClickCounter/>
        <Counter initialValue={10} incTime={500} incAmount={30}></Counter>
        <ClickTracker />
        <InteractiveWelcome /> 
        <Login  />
        <UncontrolledLogin /> 
        <Colors items={persons}/> 
        </Container>
        <ToDoList> 
        {(items, handleRemove) => (
          <ul>
            {items.map((todo, index) => (
              <li key={index}>
                {todo}
                <button type='button' onClick={()=> handleRemove(index)}>Remove</button>
              </li>
            ))}
          </ul>
        )}

        </ToDoList> */}
        <Welcome name="John" age={19} />
        <div>
            <select value={this.state.language} onChange={this.handleLangChange}> 
                <option value="en">English</option>
                <option value="tr">Turkish</option> 
            </select>
        </div>

        <LanguageContext.Provider value={this.state.language}>
          <DisplayLanguage/>
        </LanguageContext.Provider>
        <Sum numbers={[1,2,3,4]} />
      </div>
    );
  }
}
