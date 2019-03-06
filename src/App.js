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

    this.setState({ notes: [...this.state.notes, note] });
  };

  updateNote = updatedNote => {
    //set new state of the array
    this.setState({
      notes: this.state.notes.map(note =>
        note.id === updatedNote.id ? Object.assign({}, note, updatedNote) : note
      )
    });
  };

  deleteNote = note => {
    console.log("deleting note");
    var array = [...this.state.notes]; // make a separate copy of the array
    var index = array.indexOf(note);
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({ notes: array });
    }
  };

  componentDidMount() {
    this.setState({
      notes: [
        {
          id: "5c7fe41b629d0c266c186fa1",
          content:
            "qui proident labore in ea ut ullamco dolor elit anim aliqua laboris minim eiusmod et deserunt amet in pariatur qui",
          title: "occaecat do deserunt ullamco"
        },
        {
          id: "5c7fe41b145081c82bcde8d0",
          content:
            "reprehenderit cupidatat est elit dolor cupidatat labore dolore nisi incididunt eiusmod laboris dolor aliquip Lorem eiusmod velit pariatur commodo culpa",
          title: "deserunt officia dolor est"
        },
        {
          id: "5c7fe41bba48590f7684e4e0",
          content:
            "incididunt ea reprehenderit voluptate esse tempor ut duis amet ut exercitation ipsum do nostrud laboris occaecat qui pariatur adipisicing adipisicing",
          title: "consectetur quis laboris cillum"
        },
        {
          id: "5c7fe41b9866b8f6c46b5bf2",
          content:
            "proident duis ipsum eu commodo nisi irure Lorem enim consequat ut eiusmod quis duis ex et do aliquip proident tempor",
          title: "in sit magna ut"
        },
        {
          id: "5c7fe41b58725e8d9145480c",
          content:
            "ullamco veniam cillum laborum nostrud proident ex consequat velit ipsum laboris qui veniam nisi ut sunt mollit occaecat et nisi",
          title: "cillum ea exercitation eiusmod"
        }
      ]
    });
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
        <Notes
          notes={this.state.notes}
          deleteNote={this.deleteNote}
          updateNote={this.updateNote}
        />
      </div>
    );
  }
}

export default App;
