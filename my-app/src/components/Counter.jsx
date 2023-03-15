import React from "react";


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
                <h1>{this.state.count}</h1>
            </div>
        )
    }
}