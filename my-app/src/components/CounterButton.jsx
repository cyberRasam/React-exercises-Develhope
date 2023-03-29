import React from 'react';
import { Button, ButtonGroup, Dropdown } from "react-bootstrap";

class CounterButton extends React.Component {
  render() {
    return <Button className="text-capitalize" onClick={this.props.onClick}>Increment</Button>;
  }
}

export default CounterButton;
