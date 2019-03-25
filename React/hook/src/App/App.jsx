import React, { Component } from 'react';
import ButtonHooks from '../Button/ButtonHooks';
import UserList from '../UserList/UserList.jsx';
import Crud from '../Crud/Crud';

class App extends Component {
    render() {
        return (
            <div>
                {/* <ButtonHooks/> */}
                {/* <UserList/> */}
                <Crud/>
            </div>
        );
    }
}

export default App;