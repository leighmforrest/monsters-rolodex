import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    string: "Change",
    monsters: [
      { name: "Frankenstein", id: 1 },
      { name: "Dracula", id: 2 },
      { name: "Godzila", id: 3 },
      { name: "Rodan", id: 4 }
    ]
  };
  render() {
    const { monsters } = this.state;
    return (
      <div className="App">
        <p>{this.state.string}</p>
        <button
          onClick={() =>
            this.setState({ string: "This is a journey into sound!" })
          }
          className="btn btn-primary"
        >
          Change Text
        </button>
        <br />
        <ul className="list-group m-2">
          {monsters.map(monster => (
            <li className="list-group-item" key={monster.id}>
              {monster.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;
