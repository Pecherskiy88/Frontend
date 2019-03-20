import React from 'react';
import {connect} from 'react-redux';
import {change, clear} from '../redux/actions/inputAction';
import {addObj} from '../redux/actions/historyAction';
import './Form.css';

const Form = ({input, change, save, clear}) => {
    const formSubmit = (e) =>{
        save(e,input);
        clear();
    }
    return (
       <form onSubmit={formSubmit} action="">
               <input type='text' value={input} onChange = {change}/>
                <button type='submit'>Save</button>
       </form>
    );
};

function MSTP (state) {
    return {
        input: state.input,
    }
}
function MDTP (dispatch) {
    return {
        change: function (e) {
            dispatch(change(e))
        },
        save: function(e, text) {
            e.preventDefault();
            dispatch(addObj(text))
        },
        clear: function() {
            dispatch(clear())
        }
    }
}

export default connect(MSTP, MDTP)(Form);