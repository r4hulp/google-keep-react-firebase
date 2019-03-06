import React, { Component } from "react";
import "./Styles/App.scss";
import Create from "./Components/Create";
import Notes from "./Components/Notes";

class App extends Component {
  state = {
    notes: []
  };

  addNote = note => {
    note.id = Date.now();
    
    this.setState({notes: [...this.state.notes, note]});
  };

  render() {
    return (
      <div id="app" className="App">
        <div className="logos">
          <span className="logo keep">
            <img src="./assets/images/keep-logo.png" alt="Google Keep" />
          </span>
          <span className="plus">+</span>
          <span className="logo react">
            <img src="./assets/images/logo.svg" alt="React" />
          </span>
          <span className="plus">+</span>
          <span className="logo firebase">
            <img src="./assets/images/firebase-logo.png" alt="Firebase" />
          </span>
        </div>

        <Create addNote={this.addNote} />
        <Notes notes={this.state.notes} />
      </div>
    );
  }
}

export default App;
