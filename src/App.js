import React, { Component } from "react";
import "./App.css";

let defaultTextColor = "#fff";

class Aggregate extends Component {
  render() {
    return (
      <div style={{ width: "40%", display: "inline-block" }}>
        <h2 style={{ color: defaultTextColor }}>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={{ color: defaultTextColor }}>
        <img />
        <input type="text" />
        <img />
      </div>
    );
  }
}
class PlayList extends Component {
  render() {
    return (
      <div style={{ color: defaultTextColor }}>
        <img />
        <h3>PlayList Name</h3>
        <ul>
          <li>Song 1</li>
          <li>Song 2</li>
          <li>Song 3</li>
        </ul>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Title</h1>
        <Aggregate /> <Aggregate />
        <Filter />
        <PlayList />
      </div>
    );
  }
}

export default App;
