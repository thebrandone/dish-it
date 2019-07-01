import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/';
import Video from './components/Video/';
import Foodform from './components/Foodform';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <Navigation/>
      <Video/>
      <Foodform/>
    </div>
  );
}

export default App;
