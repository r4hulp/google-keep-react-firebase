import React, { Component } from "react";

class Note extends Component {
  render() {
    return <div>{this.props.note.title}</div>;
  }
}

export default Note;
