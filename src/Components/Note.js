import React, { Component } from "react";
import Rodal from "rodal";
import EditIcon from "./Icons/EditIcon";

// include styles
import "rodal/lib/rodal.css";

import Update from "./Update";

class Note extends Component {
  state = { editMode: false };
  editNote = () => {
    console.log("open the modal");
    this.show();
  };
  show() {
    this.setState({ editMode: true });
  }
  hide() {
    this.setState({ editMode: false });
  }
  customStyles = {
    borderRadius: 10
  };
  render() {
    return (
      <React.Fragment>
        <div onClick={this.editNote} className="note">
          <EditIcon />

          <div>
            <h1>{this.props.note.title}</h1>
            <pre>{this.props.note.content}</pre>
          </div>
        </div>

        <Rodal
          width={600}
          height={300}
          visible={this.state.editMode}
          closeMaskOnClick={true}
          onClose={this.hide.bind(this)}
          customStyles={this.customStyles}
        >
          <Update
            hideModal={this.hide.bind(this)}
            updateNote={this.props.updateNote}
            deleteNote={this.props.deleteNote}
            note={this.props.note}
          />
        </Rodal>
      </React.Fragment>
    );
  }
}

export default Note;
