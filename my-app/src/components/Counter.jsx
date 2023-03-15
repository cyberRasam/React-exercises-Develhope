import React from "react";
import { CounterDisplay } from "./CounterDisplay";


export class Counter extends React.Component{
    constructor(props){
        super(props) 
        this.state = {
            count: this.props.initialValue,
        }
        setInterval(
            () => {
                this.setState((state) => {
                    const newCount = state.count + this.props.incAmount
                    if (newCount > this.props.initialValue * 10) {
                        return { count: this.props.initialValue };
                      } else {
                        return { count: newCount };
                      }
                })
            }
        ,this.props.incTime)
    }

    render() {
        return (
            <div>
                <h1>
                <CounterDisplay count={this.state.count}></CounterDisplay>
                </h1>
            </div>
        )
    }
}

Counter.defaultProps = {
    initialValue : 0,
    incAmount : 1, 
    incTime : 1000 
}