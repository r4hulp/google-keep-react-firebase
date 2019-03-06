import React, { Component } from "react";

class Note extends Component {
  render() {
    return (
      <div className="note">
        {/* <EditIcon /> */}

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
