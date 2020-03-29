import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  //Setting the state up
  state = {
    persons: [
      { name: 'John', age: 28 },
      { name: "Estefania", age: 16 },
      { name: "Brian", age: 22 },
    ]
  }

  // Used to switch the name of the persons
  switchNameHandler = (newName) => {
    console.log('Was clicked');
    this.setState({
      persons: [
        { name: 'Delia', age: 50 },
        { name: newName, age: 16 },
        { name: "Schwanti", age: 20 },
      ]
    })
  }

  // Rendering the component
  render() {
    return (
      <div className="App">
        <h1>Hi there</h1>
        <h2>Hi here</h2>
        <button onClick={ () => this.switchNameHandler('Maria')}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Dante')} />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}>My hobbies are: Being cool</Person>
      </div>
    );
  }
}

export default App;
