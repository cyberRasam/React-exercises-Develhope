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
                    return {
                        count : this.state.count + this.props.incAmount
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