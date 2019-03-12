import React from 'react';
import {NavLink} from 'react-router-dom';
import './Form.css';

const Form = ({formSubmit, inputChange, text, writeCrit}) => {
    return (
        <div>
            <form className="Form" onSubmit={formSubmit}>
                <input type="text" className='text' value={text} onChange={inputChange}/>
                <input type="submit" className='btn' value="Create"/>
            </form>

            {/* <button onClick={writeCrit} data-name = 'all'>all</button>
            <button onClick={writeCrit} data-name = 'complete'>complete</button>
            <button onClick={writeCrit} data-name = 'incomlete'>incomlete</button> */}

             <NavLink onClick={writeCrit} data-name ='all' className='btn' to='/all'>All</NavLink>
             <NavLink onClick={writeCrit} data-name ='complete' exact className='btn' to='/complete'>Complete</NavLink>
             <NavLink onClick={writeCrit} data-name ='incomplete' className='btn' to='/incomplete'>Incomplete</NavLink>
       </div>

       


    );
};

export default Form;