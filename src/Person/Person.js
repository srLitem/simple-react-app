import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p className="PersonText" onClick={props.click}>My name is {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
            <input className="usernameInput" type="text" onChange={props.change} value={props.name}></input>
        </div>
    )
};

export default person;