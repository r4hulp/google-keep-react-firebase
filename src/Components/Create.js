import React, { Component } from "react";
import "../Styles/_create.scss";
class Create extends Component {
  titleRef = React.createRef();
  contentRef = React.createRef();
  
  addNote = event => {
    event.preventDefault();
    const note = {
      title: this.titleRef.current.value,
      content: this.contentRef.current.value
    };
    this.props.addNote(note);

    event.currentTarget.reset();
  };
  render() {
    return (
      <form onSubmit={this.addNote} className="create-form">
        <div className="create-note">
          <input
            type="text"
            name="title"
            ref={this.titleRef}
            placeholder="Title"
          />
          <textarea
            type="text"
            name="content"
            ref={this.contentRef}
            placeholder="Take a note..."
          />
          <button type="submit">
            <span>&#43;</span>
          </button>
        </div>
      </form>
    );
  }
}

export default Create;
