import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hi there</h1>
      <h2>Hi here</h2>
      <Person name="Paula" age="20"/>
      <Person name="Estefania" age="16"/>
      <Person name="Brian" age="22">My hobbies are: Being cool</Person>
    </div>
  );
}

export default App;
