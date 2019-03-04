import React from 'react';
import EmployeeListItem from '../EmployeeListItem/EmployeeListItem';
import PropTypes from 'prop-types';
import './EmployeeList.css';

const EmployeeList = ({userData}) => {
    return (
        <ul className='EmployeeList'>
            {userData.map(el => <EmployeeListItem name={el.name} surname={el.surname} position={el.position} key={el.surname}/>)}
        </ul>
    )
};

EmployeeList.propType = {
    userData: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            surname: PropTypes.string,
            position: PropTypes.string,
        }
        )
    )
};

export default EmployeeList;