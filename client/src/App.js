import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from './components/Navigation/';
import Foodform from './components/Foodform';
import Feed from './pages/Feed';
//import DishIt from './pages/DishIt/';
//import EditProfileForm from './components/EditProfileForm';

function App() {
  return (
    <div className="App">
      <Navigation />

      <div className="submitDish">
        <Foodform />
      </div>

      <div className='feedWrapper'>
        {/* <DishIt /> */}
        <Feed />
      </div>

    </div>
  );
}

export default App;
