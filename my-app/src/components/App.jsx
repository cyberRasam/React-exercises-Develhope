import React from 'react';
import ClickCounter from './ClickCounter';
import ClickTracker from './ClickTracker';
import { Counter } from './Counter';
import { Hello } from './Hello';
import InteractiveWelcome from './InteractiveWelcome';
import Login from './Login';
import { Welcome } from './Welcome';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="John" age={19} />
        <ClickCounter />
        <Counter initialValue={10} incTime={500} incAmount={10}></Counter>
        <ClickTracker />
        <InteractiveWelcome /> 
        <Login />
      </div>
    );
  }
}
