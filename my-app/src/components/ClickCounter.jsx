import React, { Component } from 'react';
import CounterButton from './CounterButton';

export class ClickCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = () => {
    this.setState((state) => {
      return {
        count: this.state.count + 1,
      };
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <CounterButton onClick= {this.handleClick}/>
      </div>
    );
  }
}

export default ClickCounter;
