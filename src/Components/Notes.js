import React, { Component } from "react";
import Note from "./Note";

class Notes extends Component {
  componentDidMount() {
    console.log(this.props.notes);
  }
  render() {
    return (
      <div className="notes">
        {this.props.notes.map(note => (
          <Note
            key={note.id}
            deleteNote={this.props.deleteNote}
            updateNote={this.props.updateNote}
            note={note}
          />
        ))}
      </div>
    );
  }
}

export default Notes;
