//this is my react app.. web development class Prof: Cam
//francisco cuesta

import React from 'react';
import logo from './franciscocuestapic.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="my name is francisco cuesta and im going to master react!">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> saved and reloaded.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
