import React, {useState} from 'react';
import UserTable from '../UserTable/UserTable';
import AddUserForm from '../AddUserForm/AddUserForm';


const Crud = () => {
    const userData = [
        {
          id: 1,
          nickname: 'Homer',
          username: 'floppydiskette'
        }, {
          id: 2,
          nickname: 'Bender',
          username: 'king'
        }, {
          id: 3,
          nickname: 'Filip',
          username: 'benisphere'
        }
      ]

    const [users, setUsers] = useState(userData);

    const addUser = user => {
        user.id = Date.now();
        setUsers([...users, user])
    }
    const deleteUser = e => {
        const {id} = e.target;
        setUsers(users.filter(el => el.id !== Number(id)))
    }

    return (
        <div>
                <div className='container'>
        <h1>CRUD App with Hooks</h1>
        <div className="flex-row">
            <div className="flex-large">
            <h2>Add user</h2>
            <AddUserForm addUser = {addUser}/>
            </div>
            <div className="flex-large">
            <h2>View users</h2>
            <UserTable users={users} deleteUser={deleteUser}/>
            </div>
        </div>
    </div>
        </div>
    );
};

export default Crud;