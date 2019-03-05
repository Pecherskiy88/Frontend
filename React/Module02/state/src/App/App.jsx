import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class App extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         counter: 0,
    //     }
    // } ES 6
    state = {
        counter: 0,
    }// ES 7
    increment = () => {
       this.setState(prevState => ({
           counter: prevState.counter + 1
       }))
        
    }
    decrement = () => {
        this.setState(prevState => ({
            counter: prevState.counter - 1 
        }))
        
    }
    reset = () => {
        this.setState({
            counter: 0,
        })
    }
    render() {
        let {counter} = this.state;
        return (
            <div>
             <button className="btn" data-action="sub" onClick={this.decrement}>-1</button>
            <span className="value">{counter}</span>
            <button className="btn" data-action="add" onClick={this.increment}>+1</button>   
            <button className="btn" data-action="add" onClick={this.reset}>RESET</button>   
            </div>
        );
    }
}

App.propTypes = {

};

export default App;