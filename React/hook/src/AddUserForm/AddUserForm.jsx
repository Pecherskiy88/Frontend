import React, {useState} from 'react';


const AddUserForm = ({addUser}) => {
    const initialFormState = {
        nickname: '',
        username: '',
    };

    const [user, setUser] = useState(initialFormState);

    const inputChange = e => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }
    const formSubmit = e => {
        e.preventDefault();
        if(!user.nickname || !user.username) return
        addUser(user);
        setUser(initialFormState);
    }
    return (
        <form onSubmit={formSubmit}>
            <label>Name</label>
            <input type="text" name="nickname" value={user.nickname} onChange={inputChange}/>
            <label>Nickname</label>
            <input type="text" name="username" value={user.username} onChange={inputChange}/>
            <button>Add new user</button>
      </form>
    );
};

export default AddUserForm;