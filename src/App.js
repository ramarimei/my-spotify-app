import React, { Component } from "react";
import "./App.css";

let textColor = '#fff';

class Aggregate extends Component {
  render() {
    return (
      <div>
        <h2>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component{
  render (){
    return (
        <div>
          <img/>
        <input type="text"/>
        Filter
        </div>
    );
  }
}
class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Title</h1>
      <Aggregate/>
      <Aggregate/>
      <Filter/>
      </div>
    );
  }
}

export default App;
