import React, { Component } from 'react';
import Form from '../Form/Form';
import {openClose} from '../redux/action/modalAction';
import {connect} from 'react-redux';
import UserListItem from '../UserListItem/UserListItem';
import {save, getLocal} from '../redux/action/saveAction';

import './App.css';

class App extends Component {
    
    componentDidMount(){
        save(this.props.arr);
        this.props.getLocal();
    }
    render() {
        const {toggleModal, modal, arr} = this.props;

        return (
            <div>
                {modal && <Form/>}
                <button onClick={toggleModal}>New User</button>
                <ol>
                   {arr.map(el => <UserListItem el={el}/>)} 
                   
                </ol>
            </div>
        );
    }
}
function mapStateToProps (state) {
    return {
        modal: state.modalReducer,
        arr: state.users,
    }
}
function mapDispatchToProps (dispatch) {
    return {
        toggleModal: function () {
            dispatch(openClose())
        },
        getLocal: function () {
            dispatch(getLocal())
        },
    }
}






export default connect(mapStateToProps, mapDispatchToProps) (App);


