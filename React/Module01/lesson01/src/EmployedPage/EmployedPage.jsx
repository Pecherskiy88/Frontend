import React from 'react';
import Header from '../Header/Header';
import EmployerInfo from '../EmployerInfo/EmployerInfo';
import './EmployedPage.css';

const EmployedPage = () => (
    <div className='EmployedPage'>
    <Header text='Employee Directory'/>
    <EmployerInfo/>
    </div>
);
export default EmployedPage;
