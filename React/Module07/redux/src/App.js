import React, { Component } from 'react';
import {plus,minus,reset} from './redux/actions/counterActions';
import {connect} from 'react-redux';
import Form from './Form/Form.jsx';
import Gallery from './Gallery/Gallery';
import './App.css';

class App extends Component {
  render() {
   const {value,add,reload,substr} = this.props;
    return (
      <div className='container'>
        <p className='text'>{value}</p>
        <button onClick = {substr}>-1</button>
        <button onClick = {reload}>reset</button>
        <button onClick = {add}>+1</button>
        <Form/>
        <Gallery/>
      </div>

    );
  }
}

function mapStateToProps (state) {
  return {
    value: state.counter,
    input: state.input,
  }
}
function mapDispatchToProps (dispatch) {
  return {
    add: function() {
      dispatch(plus(5))
    },
    substr: function () {
      dispatch(minus(3))
    },
    reload: function() {
      dispatch(reset())
    },
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (App);
