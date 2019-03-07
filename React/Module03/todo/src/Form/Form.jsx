import React from 'react';
import './Form.css';

const Form = ({formSubmit, inputChange, text}) => {
    return (
       <form className="Form" onSubmit={formSubmit}>
        <input type="text" className='text' value={text} onChange={inputChange}/>
        <input type="submit" className='btn' value="Create"/>
       </form>
    );
};

export default Form;