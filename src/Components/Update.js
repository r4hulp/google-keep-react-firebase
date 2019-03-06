import React, { Component } from "react";
import DeleteIcon from "./Icons/DeleteIcon";

class Update extends Component {
  titleRef = React.createRef();
  contentRef = React.createRef();
  updateNote = event => {
    event.preventDefault();

    const updatedNote = {
      ...this.props.note,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateNote(updatedNote);
  };

  deleteNote = () => {
    this.props.deleteNote(this.props.note);
  }

  render() {
    return (
      <React.Fragment>
        <div className="edit-form">
          <input
            name="title"
            value={this.props.note.title}
            onChange={this.updateNote}
            placeholder="Title"
          />
          <textarea
            name="content"
            value={this.props.note.content}
            onChange={this.updateNote}
            placeholder="Take a note..."
            rows="8"
          />
          <div className="modal-footer">
            <button
              onClick={this.deleteNote}
              type="button"
              className="delete-button"
            >
              <DeleteIcon />
            </button>
            <button
              type="button"
              onClick={this.props.hideModal}
              className="submit-button"
            >
              <span>Done</span>
            </button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Update;
