import React from 'react';
import './Form.css';

const Form = ({text, inputChange, email, password, formSubmit}) => {
    return (
        <form onSubmit= {formSubmit}>
            <input type="text" placeholder ="Input Text" name="text" className ="text" value = {text} onChange = {inputChange}/>
            <input type="email" name="email" className="text" value ={email} placeholder="Enter email"  onChange = {inputChange}/>
            <input type="password" name="password" className="text" value={password} placeholder="Enter Password"  onChange = {inputChange}/>
            <input type="submit" className="btn"/>
        </form>
    );
};

export default Form;