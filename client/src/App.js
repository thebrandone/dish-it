import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/';
// import Video from './components/Video/';
import Foodform from './components/Foodform';
import Feed from './components/Feed'
import EditProfileForm from './components/EditProfileForm';

function App() {
  return (
    <div className="App">
      <div className='feedWrapper'>
        <Navigation />
        <Feed></Feed>
        {/* <Video/> */}
        <Foodform />
        <EditProfileForm />
      </div>
    </div>
  );
}

export default App;
