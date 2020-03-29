import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) => {

  const [ personsState, setPersons ] = useState({
    persons: [
      { name: 'John', age: 28 },
      { name: "Estefania", age: 16 },
      { name: "Brian", age: 22 },
    ]
  });

  const switchNameHandler = () => {
      console.log('Was clicked');
      setPersons({
        persons: [
          { name: 'Delia', age: 50 },
          { name: "Estefania", age: 16 },
          { name: "Schwanti", age: 20 },
        ]
      })
    }

  return (
    <div className="App">
      <h1>Hi there</h1>
      <h2>Hi here</h2>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>My hobbies are: Being cool</Person>
    </div>
  );

  }

export default App;