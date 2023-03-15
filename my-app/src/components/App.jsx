import React from 'react';
import { Clock } from './Clock';
import { Hello } from './Hello';
import { Welcome } from './Welcome';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <Welcome name={<strong>Adrian</strong>} age={17} />
        <Clock></Clock>
      </div>
    );
  }
}
