import React, { Component } from "react";
import Note from "./Note";

class Notes extends Component {
  componentDidMount() {
    console.log(this.props.notes);
  }
  render() {
    return (
      <div>
        <p>Notes: </p>
        {this.props.notes.map(note => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    );
  }
}

export default Notes;
