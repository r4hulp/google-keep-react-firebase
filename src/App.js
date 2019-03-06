import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Create from "./Components/Create";
import Notes from "./Components/Notes";

class App extends Component {
  state = {
    
  };

  render() {
    return (
      <div id="app" className="App">
        <div class="logos">
          <span className="logo keep">
            <img src="./assets/images/keep-logo.png" alt="Google Keep" />
          </span>
          <span className="plus">+</span>
          <span className="logo vue">
            <img src="./assets/images/vue-logo.png" alt="Vue" />
          </span>
          <span className="plus">+</span>
          <span className="logo firebase">
            <img src="./assets/images/firebase-logo.png" alt="Firebase" />
          </span>
        </div>

        <Create />
        <Notes />
      </div>
    );
  }
}

export default App;
