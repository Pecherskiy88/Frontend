import React from 'react';
import {connect} from 'react-redux';
import {edit} from '../redux/action/editAction';
import {editChange} from '../redux/action/inputsAction';

const UserListItem = ({el, edit, arr, editChange}) => {
    const all = (e) => {
        edit();
        // editFalse();
        editChange(arr, e.target.dataset.id);

    }
    return (
            <li>
                <p>{el.firstName}</p>
                <p>{el.lastName}</p>
                <p>{el.phone}</p>
                <p>{el.email}</p>
                <p>{el.birth}</p>
                <button  data-id = {el.id} onClick = {all}>EDIT</button>
            </li>
    );
};

function MSTP (state){
    return {
        arr: state.users,
    }
}

function MDTP(dispatch) {
    return {
        edit: function(){dispatch(edit())},
        editChange: function(arr, id){dispatch(editChange(arr, id))},
    }
        
}

export default connect(MSTP, MDTP) (UserListItem);