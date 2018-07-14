import React, { Component } from 'react';
import Content from "./container/content";
import Header from "./container/header";
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <Header />
        </div>
          <Content />
      </div>
    );
  }
}

export default App;