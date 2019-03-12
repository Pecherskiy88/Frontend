import React from 'react';
import './User.css'

const User = ({userData}) => {
    return (
        <div>
            {Object.keys(userData).length ? <div>
            <img src={userData.picture.medium} alt=""/>
            <p className='Name'>{userData.name.first}</p>
            <p className='Email'>{userData.email}</p>
        </div> : <p>Loading...</p>}
        </div>
        
    );
};

export default User;