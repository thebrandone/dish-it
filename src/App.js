import React from 'react';
import './App.css';
import Navigation from './components/Navigation/';
import Video from './components/Video/';
import Foodform from './components/Foodform';

function App() {
  return (
    <div className="App">

      <Navigation/>
      <Video/>
      <Foodform/>

    </div>
  );
}

export default App;
