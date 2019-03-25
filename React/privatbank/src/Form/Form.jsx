import React from 'react';
import {connect} from 'react-redux';
import {exchangeAction} from '../redux/actions/exchangeAction';
import {inputAction} from '../redux/actions/inputAction';
import './Form.css';

const Form = ({exchangeAction, exchangeResult, input, inputValue, arr}) => {
    const exchange = (e) => {
        exchangeAction(inputValue, e.target.dataset.name, arr);
    }
  
    return (
        <div className='form'>
            <button data-name='USD' onClick={exchange} className="btn">USD</button>
            <button data-name='EUR' onClick={exchange} className="btn">EUR</button>
            <button data-name='RUR' onClick={exchange} className="btn">RUR</button>
            <button data-name='BTC' onClick={exchange} className="btn">BTC</button>
            <input onChange={input} className='input' type="text" value={inputValue}/>
            <p className='text'>{exchangeResult}</p>
        </div>
    );
};



function MSTP (state) {
    return {
        inputValue: state.inputValue,
        arr: state.fetchFromApi,
        exchangeResult: state.exchangeResult,
    }
}

function MDTP (dispatch) {
    return {
        input: function (e) {dispatch(inputAction(e))},
        exchangeAction: function (value, data, arr) {dispatch(exchangeAction(value, data, arr))}
        
    }
}


export default connect(MSTP,MDTP) (Form);
