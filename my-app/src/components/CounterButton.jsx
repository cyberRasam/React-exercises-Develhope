import React from 'react';

class CounterButton extends React.Component {
  render() {
    return <button onClick={this.props.onClick}>Increment</button>;
  }
}

export default CounterButton;
