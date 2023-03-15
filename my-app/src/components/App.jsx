import React from 'react';
import { Clock } from './Clock';
import { Counter } from './Counter';
import { Hello } from './Hello';
import { Welcome } from './Welcome';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name="John" age={19} />
        <Clock></Clock>
        <Counter></Counter>
      </div>
    );
  }
}
