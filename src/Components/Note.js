import React, { Component } from "react";
import EditIcon from "./Icons/EditIcon";

class Note extends Component {
    editNote = () => {
        console.log("open the modal");
    }
    render() {
    return (
      <div onClick={this.editNote} className="note">
        <EditIcon />

        <div>
          <h1>{this.props.note.title}</h1>
          <p>
            <pre>{this.props.note.content}</pre>
          </p>
        </div>
      </div>
    );
  }
}

export default Note;
