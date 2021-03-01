import React, { Component } from "react";
import "./App.css";

let defaultTextColor = "#fff";
let defaultStyle = {
color: defaultTextColor
};

let fakeServerData = {

  user: {
    name: 'David'
  }
};

class Aggregate extends Component {
  render() {
    return (
      <div style={{...defaultStyle, width: "40%", display: "inline-block" }}>
        <h2 style={{ color: defaultTextColor }}>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
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
      <div style={{...defaultStyle, display: "inline-block", width: "25%" }}>
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
        <h1 style= {{...defaultStyle, 'font-size': '54px'}}>{fakeServerData.user.name}'s</h1>
        <Aggregate /> <Aggregate />
        <Filter />
        <PlayList/>
        <PlayList/>
        <PlayList/>
        <PlayList/>


      </div>
    );
  }
}

export default App;
