import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  //Setting the state up
  state = {
    persons: [
      { id: '1', name: 'John', age: 28 },
      { id: '2', name: "Estefania", age: 16 },
      { id: '3', name: "Brian", age: 22 },
    ],
    showPersons: false,
  }

  // Change the name by typing
  nameChangeHandler = (event, id) => {
    // Finding the index of the person that will be modified
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    // New const to set the name of the person that will be modified
    const person = {
      ...this.state.persons[personIndex]
    };

    // Set the name of the person in the new const
    person.name = event.target.value;

    // New array to be changed with the modified const
    const newPersons = [...this.state.persons];
    newPersons[personIndex] = person; // Updating the person with the found index

    // Assigning the modified array to the current state
    this.setState({persons:newPersons});
  }

  // Delete the selected item
  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  // Hide/Show the persons elements
  togglePersonsHandler = () => {

    this.setState({
      showPersons: !this.state.showPersons,
    })
  }

  // Rendering the component
  render() {
    // Variable used to define if the persons will be shown or not
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
            click={() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            change={(event) => this.nameChangeHandler(event, person.id)}
            key={person.id}
            />
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <h1>Simple React App</h1>
        <h2>List of persons</h2>
        <button className="changeButton" onClick={this.togglePersonsHandler}>Show persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
