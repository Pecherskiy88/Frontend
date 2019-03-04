import React from 'react';
import PropTypes from 'prop-types';
import './EmployeeListItem.css';

const EmployeeListItem = ({name, surname, position}) => {

    return(
        <li className='EmployeeListItem'>
            <h2>{name} {surname}</h2>
            <p>{position}</p>
        </li>
    )
};

EmployeeListItem.propType = {
    name: PropTypes.string,
    surname: PropTypes.string,
    position: PropTypes.string
};

export default EmployeeListItem;
