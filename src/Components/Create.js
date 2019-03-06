import React, { Component } from "react";
import "../Styles/_create.scss";
class Create extends Component {
  render() {
    return (
      <div className="create-form">
        <div className="create-note">
          <input type="text" name="title" placeholder="Title" />
          <textarea type="text" name="content" placeholder="Take a note..." />
          <button type="submit">
            <span>&#43;</span>
          </button>
        </div>
      </div>
    );
  }
}

export default Create;
