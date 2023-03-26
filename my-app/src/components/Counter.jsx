import React from 'react';
import { CounterDisplay } from './CounterDisplay';

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: this.props.initialValue,
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState((state) => {
        const newCount = state.count + this.props.incAmount;
        return { count: newCount };
      });
    }, this.props.incTime);
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  componentDidUpdate(prevProp, prevState) {
    if (this.state.count > this.props.initialValue * 10) {
      this.setState((state) => {
        return { count: this.props.initialValue };
      });
    }
  }

  render() {
    return (
      <div>
        <h1>
          <CounterDisplay count={this.state.count}></CounterDisplay>
        </h1>
      </div>
    );
  }
}

Counter.defaultProps = {
  initialValue: 0,
  incAmount: 1,
  incTime: 1000,
};