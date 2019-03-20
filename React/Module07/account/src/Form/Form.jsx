import React from 'react';
import {connect} from 'react-redux';
import {inputChange} from '../redux/action/inputsAction';
import {save} from '../redux/action/saveAction';
import {openClose} from '../redux/action/modalAction';
import './Form.css';

const Form = ({inputText, dataInputText, usersObj, openClose}) => {
    function save(e) {
        e.preventDefault();
        usersObj(inputText);
        openClose();
    }
   
    return (
        <form onSubmit={save} className = 'Form' action="">
            <label>First Name<input onChange={dataInputText} type="text" name='firstName'/></label>
            <label>Last Name<input onChange={dataInputText} type="text" name='lastName'/></label>
            <label>Phone<input onChange={dataInputText} type="phone" name='phone'/></label>
            <label>Email<input onChange={dataInputText} type="email" name='email'/></label>
            <label>Birth<input onChange={dataInputText} type="date" name='birth'/></label>
            <button type='submit'>Save Contact</button>
        </form>
    );
};

function mapStateToProps (state) {
    return {
        inputText: state.inputsReducer,
        obj: state.users,
    }
}

function mapDispatchToProps (dispatch) {
    return {
        dataInputText: function (e) {dispatch(inputChange(e))},
        usersObj: function (inputText) {dispatch(save(inputText))},
        openClose: function () {dispatch(openClose())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);