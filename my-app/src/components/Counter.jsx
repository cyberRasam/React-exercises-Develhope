import React from "react";


export class Counter extends React.Component{
    constructor(props){
        super(props) 
        this.state = {
            count: 0,
        }
        setInterval(
            () => {
                this.setState((state) => {
                    return {
                        count : this.state.count +1
                    }
                })
            }
        ,1000)
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
            </div>
        )
    }
}