import React from 'react';

const UserListItem = ({el}) => {
    return (
            <li>
                <p>{el.firstName}</p>
                <p>{el.lastName}</p>
                <p>{el.phone}</p>
                <p>{el.email}</p>
                <p>{el.birth}</p>
            </li>
    );
};

export default UserListItem;