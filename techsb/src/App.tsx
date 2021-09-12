import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="app-header">
          <div className="header-text-align">
            Comming Soon
          </div>
        </header>
        <div className="App-body">
          <a
            className="App-link"
            href="https://www.linkedin.com/in/santosh-reddy-7766574a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bujala Santosh Reddy Github
          </a>
          <a
            className="App-link"
            href="https://github.com/SantoshReddyBujala/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bujala Santosh Reddy LinkedIn </a>
        </div>
        <footer className="app-footer">Comming Soon</footer>
      </div>
    );
  }
}
export default App;
