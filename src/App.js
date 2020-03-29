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
    this.setState({
      persons: [
        { name: 'Delia', age: 50 },
        { name: newName, age: 16 },
        { name: "Schwanti", age: 20 },
      ]
    })
  }

  nameChangeHandler = event => {
    this.setState({
      persons: [
        { name: 'Delia', age: 50 },
        { name: event.target.value, age: 16 },
        { name: "Schwanti", age: 20 },
      ]
    })
  }

  // Rendering the component
  render() {
    return (
      <div className="App">
        <h1>Simple React App</h1>
        <h2>List of persons</h2>
        <button className="changeButton" onClick={ () => this.switchNameHandler('Maria')}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} 
          change={this.nameChangeHandler}
          />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Dante')} 
          change={this.nameChangeHandler}
          />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          change={this.nameChangeHandler}
          >My hobbies are: Being cool
          </Person>
      </div>
    );
  }
}

export default App;
