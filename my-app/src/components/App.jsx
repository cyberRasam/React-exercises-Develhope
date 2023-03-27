import React from 'react';
import ClickCounter from './ClickCounter';
import ClickTracker from './ClickTracker';
import Colors from './Colors';
import { Counter } from './Counter';
import { Hello } from './Hello';
import InteractiveWelcome from './InteractiveWelcome';
import Login from './Login';
import UncontrolledLogin from './UncontrolledLogin';
import { Welcome } from './Welcome';

export class App extends React.Component {
  render() {
    const colors = ["red", "blue", "white"]
    return (
      <div>
        {/* <Hello />
        <Welcome name="John" age={19} />
        <ClickCounter />
        <Counter initialValue={10} incTime={500} incAmount={30}></Counter>
        <ClickTracker />
        <InteractiveWelcome /> 
        <Login  />
        <UncontrolledLogin /> */}
        <Colors items={colors}/>
      </div>
    );
  }
}
