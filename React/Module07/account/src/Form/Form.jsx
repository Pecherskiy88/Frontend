import React from 'react';
import {connect} from 'react-redux';
import {inputChange} from '../redux/action/inputsAction';
import {save} from '../redux/action/saveAction';
import {openClose} from '../redux/action/modalAction';
import {editFalse} from '../redux/action/editAction';
import './Form.css';

const Form = ({inputText, dataInputText, usersObj, openClose,editFalse, editFlag}) => {
    function save(e) {
        e.preventDefault();
        usersObj(inputText, editFlag);
        openClose();
        editFalse();
    }
   
    return (
        <form onSubmit={save} className = 'Form' action="">
            <label>First Name<input onChange={dataInputText} type="text" value={inputText.firstName} name='firstName'/></label>
            <label>Last Name<input onChange={dataInputText} type="text" value={inputText.lastName} name='lastName'/></label>
            <label>Phone<input onChange={dataInputText} type="phone" value={inputText.phone} name='phone'/></label>
            <label>Email<input onChange={dataInputText} type="email" value={inputText.email} name='email'/></label>
            <label>Birth<input onChange={dataInputText} type="date" value={inputText.birth} name='birth'/></label>
            <button type='submit'>Save Contact</button>
        </form>
    );
};

function mapStateToProps (state) {
    return {
        inputText: state.inputsReducer,
        obj: state.users,
        editFlag: state.edit

    }
}

function mapDispatchToProps (dispatch) {
    return {
        dataInputText: function (e) {dispatch(inputChange(e))},
        usersObj: function (inputText, editFlag) {dispatch(save(inputText, editFlag))},
        openClose: function () {dispatch(openClose())},
        editFalse: function () {dispatch(editFalse())},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Form);