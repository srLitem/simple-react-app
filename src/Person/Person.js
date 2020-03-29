import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>Super simple text from a person of {props.age} years old</p>
            <p>Btw, my name is {props.name}</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;