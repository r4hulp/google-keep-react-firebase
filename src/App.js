import React, { Component } from "react";
import "./Styles/App.scss";
import Create from "./Components/Create";
import Notes from "./Components/Notes";

class App extends Component {
  state = {
    notes: []
  };

  addNote = (note) => {
    //1. get copy of notes
    const notes = {...this.state.notes};
    //2. push note
    notes.push(note);
    //3. update staet
    this.setState({notes});

  }

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
        <Notes />
      </div>
    );
  }
}

export default App;
