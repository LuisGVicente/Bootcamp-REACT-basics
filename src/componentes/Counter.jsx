import React from 'react';

export default class Counter extends React.Component {

    state = {count: 0};

    add = () => {
        this.setState({
            count: this.state.count +1
        })
    }

    substract = () => {
        this.setState({
            count: this.state.count -1
        })
    }

    multiply = () => {
        this.setState({
            count: this.state.count *2
        })
    }
    multiplyBy = (n) => {
        this.setState({
            count: this.state.count *n
        })
    }

    divide = () => {
        this.setState({
            count: this.state.count /2
        })
    }

    render(){
        return (
			<div>
				<h2>The count is {this.state.count}</h2>

				<button onClick={this.substract}>Substract one</button>
				<button onClick={this.add}>Add one</button>
                <button onClick={this.multiply}>Multiply by 2</button>
                <button onClick={() => {this.multiplyBy(5)}}>Multiply by n</button>
				<button onClick={this.divide}>Divide by 2</button>
			</div>
        )
    }
}