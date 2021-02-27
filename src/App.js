import React, { Component } from "react";
import "./App.css";

let defaultTextColor = '#fff';

class Aggregate extends Component {
  render() {
    return (
      <div style={{width: "40%", display: 'inline-block'}}>
        <h2 style={{color: defaultTextColor}}>Number Text</h2>
      </div>
    );
  }
}

class Filter extends Component{
  render (){
    return (
        <div style={{color: defaultTextColor}}>
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
