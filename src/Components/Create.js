import React, { Component } from "react";

class Create extends Component {
  render() {
    return (
      <div className="create-form">
        <div className="create-note">
          <input type="text" name="title" placeholder="Title" />
          <textarea type="text" name="content" placeholder="Take a note..."></textarea>
          <button type="submit">
            <span>&#43;</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Create;
