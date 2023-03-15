import React from "react";


export class CounterDisplay extends React.Component {
    render() {
        return <span>{this.props.count}</span>
    }
}