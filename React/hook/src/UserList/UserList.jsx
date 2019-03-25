import React, {useState, useEffect} from 'react';
import useFetch from '../useFetch';

const UserList = () => {
   
    const data = useFetch('https://jsonplaceholder.typicode.com/users')

    return (
        <ul>
            {data.map(el => <li key={el.id}>{el.name}</li>)}
        </ul>
    );
};

export default UserList;