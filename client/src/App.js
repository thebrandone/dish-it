import React from 'react';
import './App.css';
import Navigation from './components/Navigation/';
import Foodform from './components/Foodform';
import Feed from './pages/Feed';
// import EditProfileForm from './components/EditProfileForm';

function App() {
  return (
    <div className="App">
      <Navigation />

      <div className="submitDish">
        <Foodform />
      </div>

      <div className='feedWrapper'>
        <Feed />
      </div>

    </div>
  );
}

export default App;
