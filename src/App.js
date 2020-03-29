import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'John', age: 28 },
      { name: "Estefania", age: 16 },
      { name: "Brian", age: 22 },
    ]
  }

  switchNameHandler = () => {
    console.log('Was clicked');
    this.setState({
      persons: [
        { name: 'Delia', age: 50 },
        { name: "Estefania", age: 16 },
        { name: "Schwanti", age: 20 },
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi there</h1>
        <h2>Hi here</h2>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My hobbies are: Being cool</Person>
      </div>
    );
  }
}

export default App;
