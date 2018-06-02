import React, { Component } from 'react';
import './App.css';
import Front from './front'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">          
          <h1 className="App-title1">Codebreaker</h1>
          <h2 className="App-title">Jesús David Gómez Osorno</h2>
          <h3 className="App-title">Sebatián Montoya Jimenéz</h3>
          
        </header>       
        <Front />
      </div>
    );
  }
}

export default App;
