import React from 'react';
import './App.css';
import Navigation from './components/Navigation/';
// import Video from './components/Video/';
import Feed from './components/Feed';

function App() {
  return (
    <div className="App">

      <Navigation />
      {/* <Video/> */}
      <div className="feedWrapper">
        <Feed>


          
        </Feed>
      </div>
    </div>
  );
}

export default App;
