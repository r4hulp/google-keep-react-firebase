import React, { Component } from "react";
import DeleteIcon from "./Icons/DeleteIcon";

class Update extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <form className="edit-form">
          <input name="title" placeholder="Title" />
          <textarea name="content" placeholder="Take a note..." rows="8" />
          <class className="modal-footer">
            <button
              //   @click="remove"
              type="button"
              class="delete-button"
            >
              <DeleteIcon />
            </button>
            <button type="submit" class="submit-button">
              <span>Done</span>
            </button>
          </class>
        </form>
      </React.Fragment>
    );
  }
}

export default Update;
